'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { BoxItem } from './box/box-data';

interface ContentContainerProps {
  heading: string;
  subheading?: string;
  boxes: BoxItem[];
  active: number | null;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  heading,
  subheading,
  boxes,
  active,
}) => {
  const activeBox = boxes.filter((box) => box.id === active)[0];
  return (
    <div className='basis-6/12 flex flex-col justify-center pl-20 py-5 overflow-scroll'>
      <AnimatePresence>
        {active === null && (
          <motion.div
            className='h-full flex flex-col justify-center'
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            layout
            key='title-container'
          >
            <h1 className='text-8xl'>{heading}</h1>
            <h2 className='text-5xl color-shift-text'>{subheading}</h2>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className='h-full flex flex-col justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key='content-container'
            layout
          >
            <h1 className='text-8xl'>{activeBox.title}</h1>
            <p className='text-2xl'>{activeBox.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContentContainer;
