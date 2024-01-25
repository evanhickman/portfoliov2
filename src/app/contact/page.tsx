'use client';
import { motion } from 'framer-motion';
import Box from '../components/Box';

const Contact = () => {
  const boxes = [
    {
      bgColor: 'bg-green-100',
    },
    {
      bgColor: 'bg-green-200',
    },
    {
      bgColor: 'bg-green-300',
    },
    {
      bgColor: 'bg-green-400',
      title: 'Coming soon...',
    },
    {
      bgColor: 'bg-green-500',
    },
    {
      bgColor: 'bg-green-600',
    },
    {
      bgColor: 'bg-green-700',
    },
  ];
  return (
    <main className='min-h-screen w-full flex bg-neutral-900 relative'>
      <motion.section
        className='basis-6/12 flex flex-col justify-center pl-20 py-5'
        animate={{ y: 0 }}
        initial={{ y: '100%' }}
        transition={{ duration: 0.5, delay: 0.4 }}
        exit={{ x: '100%' }}
      >
        <h1 className='text-8xl text-animation'>Contact</h1>
      </motion.section>
      <section className='basis-6/12 grid grid-cols-1 grid-rows-7 gap-1.5'>
        {boxes.map((box, index) => (
          <Box
            bgColor={`${box.bgColor}`}
            key={box.bgColor}
            title={box?.title}
            index={index}
          />
        ))}
      </section>
    </main>
  );
};

export default Contact;
