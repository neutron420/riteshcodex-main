import { useState, useEffect, useRef } from 'react';

const VISITOR_DOC_ID = '6a5ba93900035f450f73';

export const useVisitorCount = (): number | null => {
  const [count, setCount] = useState<number | null>(null);
  const hasIncremented = useRef(false);

  useEffect(() => {
    const fetchAndIncrement = async () => {
      const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
      const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
      const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
      const tableId = process.env.NEXT_PUBLIC_APPWRITE_TABLE_ID;

      if (!databaseId || !tableId || !projectId || !endpoint) {
        setCount(0);
        return;
      }

      const headers: Record<string, string> = {
        'X-Appwrite-Project': projectId,
        'Content-Type': 'application/json',
      };

      try {
        const res = await fetch(
          `${endpoint}/databases/${databaseId}/collections/${tableId}/documents/${VISITOR_DOC_ID}`,
          { headers }
        );

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const doc = await res.json();
        const currentCount = (doc as any).count ?? 0;
        setCount(currentCount);

        if (!hasIncremented.current) {
          hasIncremented.current = true;
          const newCount = currentCount + 1;
          await fetch(
            `${endpoint}/databases/${databaseId}/collections/${tableId}/documents/${VISITOR_DOC_ID}`,
            {
              method: 'PATCH',
              headers,
              body: JSON.stringify({ count: newCount }),
            }
          );
          setCount(newCount);
        }
      } catch {
        setCount(0);
      }
    };

    fetchAndIncrement();
  }, []);

  return count;
};
