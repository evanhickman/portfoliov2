'use client';
import { AnimatePresence, motion } from 'framer-motion';

type BoxProps = {
  bgColor: string;
  title?: string;
  description?: string;
  link?: string;
  index: number;
};

const Box = ({ bgColor, title, description, link, index }: BoxProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className={`${bgColor} flex flex-col justify-center`}
        animate={{ x: 0 }}
        initial={{ x: '100%' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        exit={{ x: '100%' }}
      >
        <div className='pl-40'>
          {title && <h2 className='text-2xl text-black-900'>{title}</h2>}
          {description && <p className='text-black-900'>{description}</p>}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Box;
