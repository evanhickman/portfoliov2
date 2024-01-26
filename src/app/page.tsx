'use client';
import CardContainer from '@/app/components/card';
import BoxContainer, { homeBoxes as boxes } from './components/box';

const Home = () => {
  return (
    <main>
      <CardContainer
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
