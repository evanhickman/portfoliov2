import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';

export default function Nav() {
  return (
    <nav className='flex justify-between'>
      <div>
        <Image src={logo} alt='logo' />
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
