'use client';
import PageTitle from '../components/PageTitle';
import BoxContainer from '../components/BoxContainer';
import { workBoxes as boxes } from '../box-data';

const Work = () => {
  return (
    <main>
      <PageTitle heading='Work' />
      <BoxContainer boxes={boxes} />
    </main>
  );
};

export default Work;
