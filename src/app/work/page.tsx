'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Box from '../components/Box';

export default function Work() {
  const ref = useRef(null);
  useEffect(() => {});

  const boxes = [
    { class: 'bg-cyan-100' },
    { class: 'bg-cyan-200' },
    { class: 'bg-cyan-300' },
    { class: 'bg-cyan-400' },
    { class: 'bg-cyan-500' },
    { class: 'bg-cyan-600' },
    { class: 'bg-cyan-700' },
  ];
  return (
    <main className='min-h-screen w-full flex bg-neutral-900 relative'>
      <section className='basis-6/12 flex flex-col justify-center pl-20 py-5 z-30'>
        <h1 className='text-8xl text-animation'>Work</h1>
      </section>
      <section className='basis-6/12 grid grid-cols-1 grid-rows-7 gap-1.5'>
        {boxes.map((box) => (
          <Box boxClass={`${box.class}`} key={box.class} />
        ))}
      </section>
      <div className='absolute top-16 right-0 w-full h-[calc(100vh-4rem)] flex justify-end bg-neutral-900/50 backdrop-blur-md z-20'>
        <div className='basis-6/12 p-20 flex flex-col justify-center'>
          <h2 className='text-5xl text-black-900 mt-[-4rem]'>Coming soon...</h2>
        </div>
      </div>
    </main>
  );
}
