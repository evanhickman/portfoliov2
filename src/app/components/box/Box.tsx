'use client';
import { AnimatePresence, motion } from 'framer-motion';

type BoxProps = {
  title?: string;
  description?: string;
  link?: string;
  id: number;
  classNames: string;
  active: number | null;
  setActive?: (id: number) => void;
  onClick?: (id: number) => void;
};

const Box = ({
  title,
  description,
  link,
  id,
  classNames,
  active,
  setActive,
  onClick,
}: BoxProps) => {
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
        onClick={() => onClick && onClick(id)}
      >
        <div className='pl-40'>
          {title && <h2 className='text-2xl text-black-900'>{title}</h2>}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Box;
