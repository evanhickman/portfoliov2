import Image from 'next/image';
import Link from 'next/link';
import Nav from './components/nav';

export default function Home() {
  return (
    <main className="hero-main min-h-screen flex flex-col relative bg-[url('/hero3.png')]">
      <section className='grow bg-sky-100/20 backdrop-blur-xl'>
        <h1>EH</h1>
      </section>
    </main>
  );
}
