'use client';
import { motion } from 'framer-motion';
interface PageTitleProps {
  heading: string;
  subheading?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ heading, subheading }) => {
  return (
    <motion.section
      className='basis-6/12 flex flex-col justify-center pl-20 py-5'
      animate={{ y: 0 }}
      initial={{ y: '100%' }}
      transition={{ type: 'spring', duration: 0.6, delay: 0.4 }}
      exit={{ x: '100%' }}
    >
      <h1 className='text-8xl'>{heading}</h1>
      {subheading && (
        <h2 className='text-5xl color-shift-text'>{subheading}</h2>
      )}
    </motion.section>
  );
};

export default PageTitle;
