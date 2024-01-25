'use client';
import { motion } from 'framer-motion';
import { workDataArray } from './data';
import Box from '../components/Box';

const Work = () => {
  return (
    <main className='min-h-screen w-full flex bg-neutral-900 relative'>
      <motion.section
        className='basis-6/12 flex flex-col justify-center pl-20 py-5'
        animate={{ y: 0 }}
        initial={{ y: '100%' }}
        transition={{ duration: 0.5, delay: 0.4 }}
        exit={{ x: '100%' }}
      >
        <h1 className='text-8xl text-animation'>Work</h1>
      </motion.section>
      <section className='basis-6/12 grid grid-cols-1 grid-rows-6 gap-1.5'>
        {workDataArray.map((item, index) => (
          <Box
            bgColor={`${item.bgColor}`}
            key={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
            index={index}
          />
        ))}
      </section>
    </main>
  );
};

export default Work;
