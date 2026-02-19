import Link from 'next/link';
import contactContent from '@/lib/content/contact';
import homeContent from '@/lib/content/home';
import workContent from '@/lib/content/work';

const Header = () => {
	const NAV_LINKS = [
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
	] as const;

	return (
		<header className="fixed inset-x-0 top-0 z-30 h-16 bg-transparent backdrop-blur-lg">
			<nav
				className="flex h-full items-center px-12"
				aria-label="Main navigation"
			>
				<ul className="flex w-full justify-between gap-8 lg:justify-start">
					{NAV_LINKS.map((link) => (
						<li key={link.link}>
							<Link
								href={link.link}
								className="text-2xl text-black-50"
								aria-current={link.link === '/' ? 'page' : undefined}
							>
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
