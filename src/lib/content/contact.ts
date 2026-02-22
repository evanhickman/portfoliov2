import type { PageContent } from './types';

const contactContent: PageContent = {
	url: '/contact',
	navTitle: 'Contact',
	heading: 'Contact',
	subheading: 'Get in touch!',
	boxes: [
		{
			id: 1,
			title: 'LinkedIn',
			subtitle: 'Professional profile',
			desc: "Let's connect on LinkedIn. You can find my full work history, recommendations, and professional updates there.",
			link: 'https://www.linkedin.com/in/evanhickman/',
			linkTitle: 'View LinkedIn Profile',
			classNames: 'bg-green-200',
			color: '#bbf7d0',
		},
		{
			id: 2,
			title: 'GitHub',
			subtitle: 'Open source & side projects',
			desc: 'Check out my GitHub for open source contributions and personal projects.',
			link: 'https://github.com/evanhickman',
			linkTitle: 'View GitHub Profile',
			classNames: 'bg-green-300',
			color: '#86efac',
		},
		{
			id: 3,
			title: 'Email',
			subtitle: 'Direct contact',
			desc: "Prefer email? Reach me directly and I'll get back to you as soon as I can.",
			link: 'mailto:hello@evanhickman.com',
			linkTitle: 'Send Email',
			classNames: 'bg-green-400',
			color: '#4ade80',
		},
	],
};

export default contactContent;
