import Hero from '../components/Hero/Hero';
import Collection from '../components/Collection/Collection';
import Divisions from '../components/Divisions/Divisions';
import About from '../components/About/About';
import InstaGallery from '../components/InstaGallery/InstaGallery';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Collection limit={4} />
      <Divisions />
      <About />
      <InstaGallery />
    </main>
  );
}
