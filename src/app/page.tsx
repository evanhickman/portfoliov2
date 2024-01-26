'use client';
import PageTitle from './components/PageTitle';
import BoxContainer from './components/BoxContainer';
import Box from './components/Box';
import { homeBoxes } from './box-data';

const Home = () => {
  return (
    <main>
      <PageTitle heading='Evan Hickman' subheading='UX Developer & Designer' />
      <BoxContainer>
        {homeBoxes.map((box) => (
          <Box classNames={box.classNames} key={box.id} id={box.id} />
        ))}
      </BoxContainer>
    </main>
  );
};

export default Home;
