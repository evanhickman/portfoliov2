'use client';
import PageTitle from './components/ContentContainer';
import BoxContainer from './components/BoxContainer';
import { homeBoxes as boxes } from './box-data';

const Home = () => {
  return (
    <main>
      <PageTitle heading='Evan Hickman' subheading='UX Developer & Designer' />
      <BoxContainer boxes={boxes} />
    </main>
  );
};

export default Home;
