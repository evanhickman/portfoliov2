'use client';
import { useEffect, useRef } from 'react';
import { workDataArray } from './data';
import Box from '../components/Box';

export default function Work() {
  const ref = useRef(null);
  useEffect(() => {});
  return (
    <main className='min-h-screen w-full flex bg-neutral-900 relative'>
      <section className='basis-6/12 flex flex-col justify-center pl-20 py-5 z-30'>
        <h1 className='text-8xl text-animation'>Work</h1>
      </section>
      <section className='basis-6/12 grid grid-cols-1 grid-rows-6 gap-1.5'>
        {workDataArray.map((item) => (
          <Box
            bgColor={`${item.bgColor}`}
            key={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </section>
    </main>
  );
}
