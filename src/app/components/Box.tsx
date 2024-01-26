'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type BoxProps = {
  bgColor: string;
  title?: string;
  description?: string;
  link?: string;
  index: number;
};

const Box = ({ bgColor, title, description, link, index }: BoxProps) => {
  const [active, setActive] = useState(false);
  const variants = {
    visible: {
      x: '0',
      gridRow: 'span 1',
      transition: { duration: 0.5, delay: index * 0.1 },
    },
    active: {
      x: '0',
      gridRow: `span 50`,
      transition: { type: 'spring', duration: 1, delay: 0, layout: true },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`${bgColor} flex flex-col justify-center row-span-1 cursor-pointer z-10`}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{
          type: 'spring',
          duration: 0.6,
          delay: index * 0.1,
        }}
        exit={{ x: '100%' }}
        onClick={() => setActive(!active)}
      >
        <div className='pl-40'>
          {title && <h2 className='text-2xl text-black-900'>{title}</h2>}
        </div>
      </motion.div>
      {active && (
        <motion.div
          className='absolute top-0 right-0 w-full bg-neutral-50/40 backdrop-blur-md z-50'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '100vh' }}
        >
          {description && <p className='text-black-900'>{description}</p>}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Box;
