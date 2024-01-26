'use client';
import { AnimatePresence, motion, useTransform } from 'framer-motion';
import { useState } from 'react';

type BoxProps = {
  title?: string;
  description?: string;
  link?: string;
  id: number;
  classNames: string;
  expanded: boolean;
  onClick: (id: number) => void;
};

const Box = ({
  title,
  description,
  link,
  id,
  classNames,
  expanded,
  onClick,
}: BoxProps) => {
  const variants = {
    initial: {
      x: '100%',
      opacity: 1,
      flexGrow: '1',
      layout: true,
    },
    expanded: {
      x: '0',
      opacity: 1,
      flexGrow: '1',
      transition: {
        type: 'spring',
        duration: 0.5,
        delay: id * 0.1,
      },
      layout: true,
    },
    contracted: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'spring',
        duration: 0.5,
        delay: id * 0.1,
      },
      transitionEnd: {
        height: '0',
        flexGrow: '0',
      },
      layout: true,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`${classNames} flex-1 flex flex-col justify-center cursor-pointer z-10`}
        initial='initial'
        animate={
          activeBox === null
            ? variants.default
            : activeBox === id
            ? variants.active
            : variants.inactive
        }
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
