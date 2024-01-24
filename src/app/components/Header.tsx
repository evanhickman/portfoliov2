import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const Header = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Work',
      link: '/work',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  // bg-neutral-900/20 backdrop-blur-md

  return (
    <header className='fixed w-full top-0 h-16 px-20 flex flex-col justify-center z-50'>
      <nav>
        <ul className='flex'>
          {navLinks.map((link) => (
            <li className='pr-8' key={link.link}>
              <Link href={link.link} className='text-2xl text-black-50'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
