import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';

const urban = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: 'Evan Hickman',
		template: '%s | Evan Hickman',
	},
	description:
		'Evan Hickman is an experienced software engineer specializing in React and TypeScript, with a strong focus on building performant and accessible web applications.',
	metadataBase: new URL('https://evanhickman.com'),
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://evanhickman.com',
		siteName: 'Evan Hickman',
	},
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${urban.className} bg-neutral-900`}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
