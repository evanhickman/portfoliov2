import Link from 'next/link';
import contactContent from '@/lib/content/contact';
import homeContent from '@/lib/content/home';
import workContent from '@/lib/content/work';

const Header = () => {
	const navLinks = [
		{
			name: homeContent.navTitle,
			link: homeContent.url,
		},
		{
			name: workContent.navTitle,
			link: workContent.url,
		},
		{
			name: contactContent.navTitle,
			link: contactContent.url,
		},
	];

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
	);
};

export default Header;
