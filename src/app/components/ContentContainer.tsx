'use client';
import { motion } from 'framer-motion';
import { BoxItem } from '../box-data';

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
    <motion.section
      className='basis-6/12 flex flex-col justify-center pl-20 py-5 overflow-scroll'
      animate={{ y: 0 }}
      initial={{ y: '100%' }}
      transition={{ type: 'spring', duration: 0.6, delay: 0.4 }}
      exit={{ x: '100%' }}
    >
      {active === null && (
        <>
          <h1 className='text-8xl'>{heading}</h1>
          <h2 className='text-5xl color-shift-text'>{subheading}</h2>
        </>
      )}
      {active !== null && (
        <>
          <h1 className='text-8xl'>{activeBox.title}</h1>
          <p className='text-2xl'>{activeBox.description}</p>
        </>
      )}
    </motion.section>
  );
};

export default ContentContainer;
