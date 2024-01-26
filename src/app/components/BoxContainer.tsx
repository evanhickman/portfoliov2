import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BoxItem } from '../box-data';
import Box from './Box';

interface BoxContainerProps {
  boxes: BoxItem[];
}

const BoxContainer = ({ boxes }: BoxContainerProps) => {
  const [active, setActive] = useState<number | null>(null);

  const onClick = (id: number) => {
    setActive((prevId) => (prevId === id ? null : id));
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
          isActive={box.id === active}
        />
      ))}
      {active &&
        boxes
          .filter((box) => box.id === active)
          .map((box) => (
            <AnimatePresence key={box.id}>
              <motion.div
                className='fixed top-0 right-0 translate-y-[-50%] w-1/2 h-full bg-yellow-50/50 backdrop-blur-xl z-20 p-40'
                layout
                initial={{ opacity: 0, x: '100%', y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: '100%', y: 0 }}
                key={box.id}
              >
                <span
                  className='block mb-8 text-black-900 cursor-pointer'
                  onClick={() => setActive(null)}
                >
                  CLOSE
                </span>
                {box.title && (
                  <h2 className='mb-6 text-2xl text-black-900'>{box.title}</h2>
                )}
                {box.description && (
                  <p className='text-black-900'>{box.description}</p>
                )}
              </motion.div>
            </AnimatePresence>
          ))}
    </section>
  );
};

export default BoxContainer;
