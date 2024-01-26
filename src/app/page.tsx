'use client';
import PageTitle from './components/ContentContainer';
import BoxContainer from './components/BoxContainer';
import { homeBoxes as boxes } from './box-data';
import ContentContainer from './components/ContentContainer';

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
