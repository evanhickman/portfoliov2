'use client';
import BoxContainer from '@/app/components/box';
import ContentContainer from '@/app/components/ContentContainer';
import { homeBoxes as boxes } from './components/box/box-data';

const Home = () => {
  return (
    <main>
      <ContentContainer
        boxes={boxes}
        active={null}
        heading='Evan Hickman'
        subheading='UX Developer & Designer'
      />
      <BoxContainer boxes={boxes} active={null} />
    </main>
  );
};

export default Home;
