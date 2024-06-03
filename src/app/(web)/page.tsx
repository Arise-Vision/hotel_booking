import HeroSection from '@/components/HeroSection/HeroSection';
import PageSearch from '@/components/PageSearch/PageSearch';
import Gallery from '@/components/Gallery/Gallery';
import NewsLetter from '@/components/NewsLetter/NewsLetter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PageSearch />
      <Gallery />
      <NewsLetter />
    </>
  );
}
