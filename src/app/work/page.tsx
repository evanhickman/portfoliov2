'use client';
import ContentContainer from '../components/ContentContainer';
import BoxContainer from '../components/BoxContainer';
import { workBoxes as boxes } from '../box-data';
import { useState } from 'react';

const Work = () => {
  const [active, setActive] = useState<number | null>(null);

  const onClick = (id: number) => {
    setActive((prevId) => (prevId === id ? null : id));
  };

  console.log(active);

  return (
    <main>
      <ContentContainer heading='Work' />
      <BoxContainer
        boxes={boxes}
        active={active}
        setActive={setActive}
        onClick={onClick}
      />
    </main>
  );
};

export default Work;
