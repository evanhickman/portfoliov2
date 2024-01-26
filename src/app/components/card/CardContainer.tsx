'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { BoxItem } from '../box/box-data';

interface CardContainerProps {
  heading: string;
  subheading?: string;
  boxes: BoxItem[];
  active: number | null;
}

const CardContainer: React.FC<CardContainerProps> = ({
  heading,
  subheading,
  boxes,
  active,
}) => {
  const activeBox = boxes.filter((box) => box.id === active)[0];
  return (
    <div className='basis-6/12 flex flex-col justify-center pl-20 py-5 overflow-scroll'>
      <AnimatePresence mode='wait'>
        {active === null && (
          <motion.div
            className='h-full flex flex-col justify-center'
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ opacity: '0' }}
            transition={{ type: 'spring', duration: 0.5 }}
            layout
            key='title-container'
          >
            <h1 className='text-8xl'>{heading}</h1>
            <h2 className='text-5xl color-shift-text'>{subheading}</h2>
          </motion.div>
        )}
        {active !== null && (
          <motion.div
            className='h-full flex flex-col justify-center'
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ opacity: '0' }}
            transition={{ type: 'spring', duration: 0.5 }}
            key={activeBox?.id}
            layout
          >
            <h1 className='text-8xl'>{activeBox?.title}</h1>
            <p className='text-2xl'>{activeBox?.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardContainer;
