import type { Metadata } from 'next';
import Box from '@/app/components/Box';
import Card from '@/app/components/Card';
import content from '@/lib/content/contact';

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
	return (
		<>
			<Card
				content={content}
				heading={content.heading}
				subheading={content.subheading}
				active={null}
			/>
			<Box boxes={content.boxes} active={null} />
		</>
	);
};

export default Contact;
