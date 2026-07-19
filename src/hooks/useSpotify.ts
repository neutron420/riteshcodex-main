import { useState, useEffect, useCallback, useRef } from 'react';

export interface SpotifyTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumArt: string | null;
  songUrl: string | null;
  lastPlayedAt?: string;
}

interface LanyardResponse {
  success: boolean;
  data: {
    listening_to_spotify: boolean;
    spotify: {
      track_id: string;
      song: string;
      artist: string;
      album: string;
      album_art_url: string;
    } | null;
  };
}

interface UseSpotifyReturn {
  data: SpotifyTrack | null;
  loading: boolean;
  error: string | null;
}

const LOCAL_STORAGE_KEY = 'neutron420_last_played_song';

export function useSpotify(): UseSpotifyReturn {
  const [data, setData] = useState<SpotifyTrack | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const discordId = process.env.NEXT_PUBLIC_DISCORD_ID;
  const currentTrackRef = useRef<SpotifyTrack | null>(null);

  const fetchSpotifyData = useCallback(async () => {
    if (!discordId) {
      setError('Discord ID not configured');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json: LanyardResponse = await res.json();

      if (json.success && json.data) {
        const { listening_to_spotify, spotify } = json.data;

        if (listening_to_spotify && spotify) {
          const trackData: SpotifyTrack = {
            isPlaying: true,
            title: spotify.song,
            artist: spotify.artist,
            albumArt: spotify.album_art_url,
            songUrl: `https://open.spotify.com/track/${spotify.track_id}`,
            lastPlayedAt: new Date().toISOString(),
          };

          currentTrackRef.current = trackData;
          setData(trackData);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(trackData));
        } else {
          if (currentTrackRef.current) {
            if (currentTrackRef.current.isPlaying) {
              const offlineTrack = {
                ...currentTrackRef.current,
                isPlaying: false,
              };
              currentTrackRef.current = offlineTrack;
              setData(offlineTrack);
            }
            setLoading(false);
            return;
          }

          const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
          if (savedData) {
            try {
              const parsed: SpotifyTrack = JSON.parse(savedData);
              const lastPlayed = parsed.lastPlayedAt ? new Date(parsed.lastPlayedAt).getTime() : 0;
              const oneWeek = 7 * 24 * 60 * 60 * 1000;

              if (!parsed.lastPlayedAt || Date.now() - lastPlayed < oneWeek) {
                const offlineTrack = { ...parsed, isPlaying: false };
                currentTrackRef.current = offlineTrack;
                setData(offlineTrack);
              } else {
                setData(null);
                localStorage.removeItem(LOCAL_STORAGE_KEY);
              }
            } catch {
              setData(null);
            }
          } else {
            setData(null);
          }
        }
        setError(null);
      }
    } catch {
      if (currentTrackRef.current) {
        setLoading(false);
        return;
      }

      const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedData) {
        try {
          const parsed: SpotifyTrack = JSON.parse(savedData);
          const lastPlayed = parsed.lastPlayedAt ? new Date(parsed.lastPlayedAt).getTime() : 0;
          const oneWeek = 7 * 24 * 60 * 60 * 1000;

          if (!parsed.lastPlayedAt || Date.now() - lastPlayed < oneWeek) {
            const offlineTrack = { ...parsed, isPlaying: false };
            currentTrackRef.current = offlineTrack;
            setData(offlineTrack);
          } else {
            setData(null);
          }
        } catch {
          setData(null);
        }
      }
      setError('Could not load Spotify data');
    } finally {
      setLoading(false);
    }
  }, [discordId]);

  useEffect(() => {
    fetchSpotifyData();
    const interval = setInterval(fetchSpotifyData, 15_000);
    return () => clearInterval(interval);
  }, [fetchSpotifyData]);

  return { data, loading, error };
}
