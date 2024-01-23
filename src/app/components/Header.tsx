import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';

export default function Header() {
  return (
    <header className='fixed w-full top-0 h-40 px-20 flex flex-col justify-center bg-neutral-900/20 backdrop-blur-md z-50'>
      <nav className='flex justify-between'>
        <div className='basis-6/12'>
          {/* <Image src={logo} alt='logo' /> */}
          <Link href='/' className='text-2xl text-cyan-100'>
            EH
          </Link>
        </div>
        <ul className='flex basis-6/12 justify-center'>
          <li className='pr-8'>
            <Link href='/work' className='text-2xl text-black-900'>
              Work
            </Link>
          </li>
          <li className='pl-8'>
            <Link href='/contact' className='text-2xl text-black-900'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
