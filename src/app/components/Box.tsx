'use client';
import { use, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BoxItem } from '../box-data';

type BoxProps = {
  title?: string;
  description?: string;
  link?: string;
  id: number;
  classNames: string;
  activeBox: null | number;
  onClick: (id: number) => void;
};

const Box = ({
  title,
  description,
  link,
  id,
  classNames,
  activeBox,
  onClick,
}: BoxProps) => {
  const variants = {
    initial: {
      x: '100%',
      gridRow: 'span 1',
    },
    default: {
      x: '0',
      gridRow: 'span 1',
      transition: { type: 'spring', duration: 0.5, delay: id * 0.1 },
    },
    active: {
      x: '0',
      gridRow: `span 50`,
      transition: { type: 'spring', duration: 1, delay: 0, layout: true },
    },
    inactive: {
      x: '100%',
      gridRow: 'span 1',
      transition: { type: 'spring', duration: 0.5, delay: id * 0.1 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`${classNames} flex flex-col justify-center row-span-1 cursor-pointer z-10`}
        layout
        initial='initial'
        animate={
          activeBox === null
            ? variants.default
            : activeBox === id
            ? variants.active
            : variants.inactive
        }
        transition={{
          type: 'spring',
          duration: 0.6,
          delay: id * 0.1,
        }}
        exit={{ x: '100%' }}
        onClick={() => onClick(id)}
        key={id}
        variants={variants}
      >
        <div className='pl-40'>
          {title && <h2 className='text-2xl text-black-900'>{title}</h2>}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Box;
