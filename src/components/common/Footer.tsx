import { footerConfig } from '@/config/Footer';
import Container from '../layouts/Container';
import RepeatSeparator from '../ui/repeat-separator';
import BottomBanner from '../ui/bottom-banner';

const videoSrc = '/ronaldo-fixed.mp4';

const Footer = () => {
  return (
    <>
      <RepeatSeparator />
      <Container className="py-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-secondary text-center text-sm">
            {footerConfig.text} <b>{footerConfig.developer}</b> <br /> &copy;{' '}
            {new Date().getFullYear()}. {footerConfig.copyright}
          </p>
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="aspect-video w-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
      <RepeatSeparator />
      <div data-footer-bottom-banner>
        <BottomBanner />
      </div>
    </>
  );
};

export default Footer;
