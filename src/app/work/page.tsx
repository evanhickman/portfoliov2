import type { Metadata } from 'next';
import content from '@/lib/content/work';
import WorkContent from './WorkClient';

export const metadata: Metadata = {
	title: 'Work',
	description:
		'An overview of my professional experience in frontend software engineering.',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://evanhickman.com/work',
		siteName: 'Evan Hickman',
	},
};

const Work = () => {
	return <WorkContent content={content} />;
};

export default Work;
