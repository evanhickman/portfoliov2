'use client';
import ContentContainer from '@/app/components/ContentContainer';
import BoxContainer from '@/app/components/box';
import { workBoxes as boxes } from '../components/box/box-data';
import { useState } from 'react';

const Work = () => {
  const [active, setActive] = useState<number | null>(null);

  const onClick = (id: number) => {
    setActive((prevId) => (prevId === id ? null : id));
  };

  console.log(active);

  return (
    <main>
      <ContentContainer boxes={boxes} active={active} heading='Work' />
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
