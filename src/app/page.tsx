'use client';
import { AnimatePresence, motion } from 'framer-motion';

import Box from './components/Box';
const Home = () => {
  const boxes = [
    'box-one',
    'box-two',
    'box-three',
    'box-four',
    'box-five',
    'box-six',
  ];
  return (
    <main className='min-h-screen min-w-screen flex bg-neutral-900 relative'>
      <motion.section
        className='basis-6/12 flex flex-col justify-center pl-20 py-5'
        animate={{ y: 0 }}
        initial={{ y: '100%' }}
        transition={{ duration: 0.5, delay: 0.4 }}
        exit={{ x: '100%' }}
      >
        <h1 className='text-8xl'>Evan Hickman</h1>
        <h2 className='text-5xl color-shift-text'>UX Developer & Designer</h2>
      </motion.section>
      <section className='basis-6/12 grid grid-cols-1 grid-rows-6 gap-1.5'>
        {boxes.map((box, index) => (
          <Box bgColor={`${box}`} key={box} index={index} />
        ))}
      </section>
    </main>
  );
};

export default Home;
