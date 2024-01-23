import Image from 'next/image';

export default function Work() {
  return (
    <main className='min-h-screen min-w-screen flex bg-neutral-900 relative'>
      <section className='basis-6/12 flex flex-col justify-center pl-20 py-5'>
        <h1 className='text-8xl text-animation'>Work</h1>
      </section>
      <section className='basis-6/12 grid grid-cols-1 grid-rows-6 gap-1.5'>
        <div className='bg-cyan-100'></div>
        <div className='bg-cyan-200'></div>
        <div className='bg-cyan-300'></div>
        <div className='bg-cyan-400'></div>
        <div className='bg-cyan-500'></div>
        <div className='bg-cyan-600'></div>
      </section>
    </main>
  );
}
