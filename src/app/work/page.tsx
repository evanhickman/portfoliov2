'use client';
import { useState } from 'react';
import CardContainer from '@/app/components/card';
import BoxContainer, { workBoxes as boxes } from '../components/box';

const Work = () => {
  const [active, setActive] = useState<number | null>(null);

  const onClick = (id: number) => {
    setActive((prevId) => (prevId === id ? null : id));
  };

  console.log(active);

  return (
    <main>
      <CardContainer boxes={boxes} active={active} heading='Work' />
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
