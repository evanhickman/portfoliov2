import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';

const urban = Urbanist({ subsets: ['latin'], display: 'swap' });

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
		description:
			'Evan Hickman is an experienced software engineer specializing in React and TypeScript, with a strong focus on building performant and accessible web applications.',
		images: [
			{
				url: 'https://evanhickman.com/og.png',
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Evan Hickman',
		description:
			'Evan Hickman is an experienced software engineer specializing in React and TypeScript, with a strong focus on building performant and accessible web applications.',
		images: ['https://evanhickman.com/og.png'],
	},
	icons: {
		icon: '/favicon.ico',
	},
};

const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Evan Hickman',
	url: 'https://evanhickman.com',
	jobTitle: 'Frontend Engineer',
	sameAs: [
		'https://www.linkedin.com/in/evanhickman/',
		'https://github.com/evanhickman',
	],
	email: 'hello@evanhickman.com',
	knowsAbout: ['React', 'TypeScript', 'Next.js', 'Frontend Engineering'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
				/>
			</head>
			<body className={`${urban.className} bg-neutral-900`}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
