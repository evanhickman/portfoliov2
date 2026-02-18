import type { Metadata } from 'next';
import content from '@/lib/content/work';
import WorkContent from './WorkClient';

export const metadata: Metadata = {
	title: 'Work',
	description:
		'Evan Hickman has a rich history of working with various companies and projects, showcasing his expertise in software engineering and development.',
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
