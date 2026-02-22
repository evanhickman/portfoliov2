import type { Metadata } from 'next';
import content from '@/lib/content/contact';
import PageClient from '@/app/components/PageClient';

export const metadata: Metadata = {
	title: 'Contact',
	description:
		'Ways to get in touch with me, including email and social media links.',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://evanhickman.com/contact',
		siteName: 'Evan Hickman',
	},
};

const Contact = () => {
	return <PageClient content={content} />;
};

export default Contact;
