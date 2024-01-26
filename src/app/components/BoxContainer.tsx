import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BoxItem } from '../box-data';
import Box from './Box';

interface BoxContainerProps {
  boxes: BoxItem[];
}

const BoxContainer = ({ boxes }: BoxContainerProps) => {
  const [activeBox, setActiveBox] = useState<number | null>(null);

  const onClick = (id: number) => {
    setActiveBox((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className={`grid grid-cols-1 grid-rows-${boxes.length} gap-1.5`}>
      {boxes.map((box) => (
        <Box
          id={box?.id}
          title={box?.title}
          classNames={box?.classNames}
          key={box.id}
          onClick={onClick}
          activeBox={activeBox}
        />
      ))}
    </section>
  );
};

export default BoxContainer;
