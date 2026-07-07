import type { Metadata } from 'next';
import PageClient from '@/app/components/PageClient';
import content from '@/lib/content/contact';

export const metadata: Metadata = {
	title: 'Contact',
	description:
		'Ways to get in touch with me, including email and social media links.',
	alternates: {
		canonical: '/contact',
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://evanhickman.com/contact',
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

const Contact = () => {
	return <PageClient content={content} />;
};

export default Contact;
