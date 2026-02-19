import Link from 'next/link';
import { NAV_LINKS } from '@/lib/content/nav';

export default function Header() {
	return (
		<header className="fixed inset-x-0 top-0 z-30 h-16 bg-transparent backdrop-blur-lg">
			<nav
				className="flex h-full items-center px-12"
				aria-label="Main navigation"
				tabIndex={-1}
			>
				<ul className="flex w-full justify-between gap-8 lg:justify-start">
					{NAV_LINKS.map((link) => {
						const isCurrentPage = link.link === '/';
						return (
							<li key={link.link}>
								<Link
									href={link.link}
									className="text-2xl text-neutral-50 transition-colors hover:text-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 rounded px-2 py-1"
									aria-current={isCurrentPage ? 'page' : undefined}
									{...(isCurrentPage && {
										'aria-label': `${link.name} (current page)`,
									})}
									tabIndex={0}
								>
									{link.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
