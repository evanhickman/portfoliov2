import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.png'

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
  ]

  // bg-neutral-900/20 backdrop-blur-md

  return (
    <header className="fixed w-screen top-0 h-16 px-12 flex flex-col justify-center z-30 bg-transparent backdrop-blur-lg">
      <nav>
        <ul className="flex justify-between lg:justify-start">
          {navLinks.map((link) => (
            <li className="pr-0 lg:pr-8" key={link.link}>
              <Link href={link.link} className="text-2xl text-black-50">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
