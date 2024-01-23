// import Link from 'next/link';
import Box from './components/box';

// const imgStyle: React.CSSProperties = {
//   position: 'absolute',
//   top: 0,
//   left: '50%',
//   width: '50vw',
//   height: '100vh',
// };

export default function Home() {
  return (
    <main className='hero-main min-h-screen min-w-screen flex bg-neutral-900 relative'>
      <section className='w-50-screen pl-20 py-5'>
        <h1 className='text-7xl'>Evan Hickman</h1>
        <h2 className='text-4xl'>Frontend Developer</h2>
      </section>
      <section className='w-50-screen'>
        <Box />
      </section>
    </main>
  );
}
