import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const Header = () => {
  const navLinks = [
    {
      name: 'Work',
      link: '/work',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
    {
      name: 'Resume',
      link: '/resume',
    },
  ];

  return (
    <header className='fixed w-full top-0 h-16 px-20 flex flex-col justify-center bg-neutral-900/20 backdrop-blur-md z-50'>
      <nav className='flex justify-between'>
        <div className='basis-6/12'>
          <Link href='/' className='text-2xl'>
            EH
          </Link>
        </div>
        <ul className='flex basis-6/12 justify-center'>
          {navLinks.map((link) => (
            <li className='px-8' key={link.link}>
              <Link href={link.link} className='text-2xl text-black-900'>
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
