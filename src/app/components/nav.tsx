import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='basis-6/12'>
      <div>
        <Link href='/'>EH</Link>
      </div>
      <ul className='flex justify-end'>
        <li className='pl-8'>
          <Link href='/work'>Work</Link>
        </li>
        <li className='pl-8'>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
