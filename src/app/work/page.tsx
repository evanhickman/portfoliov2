import type { Metadata } from 'next';
import PageClient from '@/app/components/PageClient';
import content from '@/lib/content/work';

export const metadata: Metadata = {
	title: 'Work',
	description:
		'An overview of my professional experience in frontend software engineering. I specialize in React and TypeScript, and have worked on a variety of projects across different industries.',
	alternates: {
		canonical: '/work',
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://evanhickman.com/work',
		siteName: 'Evan Hickman',
		images: [
			{
				url: 'https://evanhickman.com/og.png',
				width: 1200,
				height: 630,
				alt: 'Evan Hickman — Frontend Engineer',
			},
		],
	},
};

const Work = () => {
	return <PageClient content={content} />;
};

export default Work;
