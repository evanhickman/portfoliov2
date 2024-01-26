'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BoxItem } from '../box-data';

type BoxProps = {
  title?: string;
  description?: string;
  link?: string;
  id: number;
  classNames: string;
  onClick: () => void;
  isActive: boolean;
};

const Box = ({
  title,
  description,
  link,
  id,
  classNames,
  isActive,
}: BoxProps) => {
  const variants = {
    visible: {
      x: '0',
      gridRow: 'span 1',
      transition: { duration: 0.5, delay: id * 0.1 },
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
        className={`${classNames} flex flex-col justify-center row-span-1 cursor-pointer z-10`}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{
          type: 'spring',
          duration: 0.6,
          delay: id * 0.1,
        }}
        exit={{ x: '100%' }}
      >
        <div className='pl-40'>
          {title && <h2 className='text-2xl text-black-900'>{title}</h2>}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Box;
