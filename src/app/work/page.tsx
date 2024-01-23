'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Box from '../components/Box';

export default function Work() {
  const ref = useRef(null);
  useEffect(() => {});

  const boxes = [
    { class: 'bg-cyan-100', title: '', description: '', active: false },
    {
      class: 'bg-cyan-200',
      title: 'Jane Seller Dashboard',
      description: '',
      active: false,
    },
    {
      class: 'bg-cyan-300',
      title: 'Marigold Relationship Marketing',
      description: '',
      active: false,
    },
    {
      class: 'bg-cyan-400',
      title: 'Third Man Records',
      description: '',
      active: false,
    },
    {
      class: 'bg-cyan-500',
      title: 'Jack White',
      description: '',
      active: false,
    },
    {
      class: 'bg-cyan-600',
      title: 'The Raconteurs',
      description: '',
      active: false,
    },
    {
      class: 'bg-cyan-700',
      title: 'Third Man Pressing',
      description: '',
      active: false,
    },
  ];
  return (
    <main className='min-h-screen w-full flex bg-neutral-900 relative'>
      <section className='basis-6/12 flex flex-col justify-center pl-20 py-5'>
        <h1 className='text-8xl text-animation'>Work</h1>
      </section>
      <section className='basis-6/12 grid grid-cols-1 grid-rows-7 gap-1.5'>
        {boxes.map((box) => (
          <Box
            title={box.title}
            boxClass={`${box.class}`}
            active={box.active}
            key={box.class}
          />
        ))}
      </section>
    </main>
  );
}
