import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BoxItem } from '../box-data';
import Box from './Box';

interface BoxContainerProps {
  boxes: BoxItem[];
  active: number | null;
  setActive?: (id: number) => void;
  onClick?: (id: number) => void;
}

const BoxContainer = ({
  boxes,
  active,
  setActive,
  onClick,
}: BoxContainerProps) => {
  return (
    <section className={`grid grid-cols-1 grid-rows-${boxes.length} gap-1.5`}>
      {boxes.map((box) => (
        <Box
          id={box?.id}
          title={box?.title}
          classNames={box?.classNames}
          key={box.id}
          active={active}
          setActive={setActive}
          onClick={onClick}
        />
      ))}
    </section>
  );
};

export default BoxContainer;
