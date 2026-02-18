import type { Metadata } from 'next';
import BoxContainer from '@/app/components/box/BoxContainer';
import CardContainer from '@/app/components/card/CardContainer';
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
			<CardContainer
				content={content}
				heading={content.heading}
				subheading={content.subheading}
				active={null}
			/>
			<BoxContainer boxes={content.boxes} active={null} />
		</>
	);
};

export default Contact;
