import HeroSection from '@/components/HeroSection/HeroSection';
import PageSearch from '@/components/PageSearch/PageSearch';
import Gallery from '@/components/Gallery/Gallery';
import NewsLetter from '@/components/NewsLetter/NewsLetter';
import FeaturedRoom from '@/components/FeaturedRoom/FeaturedRoom';
import { getFeaturedRoom } from '@/libs/api'

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();
  console.log(getFeaturedRoom);
  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Gallery />
      <NewsLetter />
    </>
  );
}

export default Home;
