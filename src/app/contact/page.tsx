import type { Metadata } from 'next';
import BoxContainer from '@/app/components/box/BoxContainer';
import CardContainer from '@/app/components/card/CardContainer';
import content from '@/lib/content/contact';

export const metadata: Metadata = {
	title: 'Contact',
	description:
		'Evan Hickman is open to new opportunities and collaborations. Feel free to reach out through the contact information provided.',
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
				heading="Contact"
				subheading="Coming soon"
				active={null}
			/>
			<BoxContainer boxes={content.boxes} active={null} />
		</>
	);
};

export default Contact;
