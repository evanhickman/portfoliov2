'use client';
import PageTitle from '../components/PageTitle';
import BoxContainer from '../components/BoxContainer';
import Box from '../components/Box';
import { workBoxes } from '../box-data';

const Work = () => {
  return (
    <main>
      <PageTitle heading='Work' />
      <BoxContainer>
        {workBoxes.map((box) => (
          <Box
            classNames={box.classNames}
            key={box.id}
            title={box.title}
            description={box.description}
            link={box.link}
            id={box.id}
          />
        ))}
      </BoxContainer>
    </main>
  );
};

export default Work;
