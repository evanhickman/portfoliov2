import type { PageContent } from './types';

const workContent: PageContent = {
	url: '/work',
	navTitle: 'Work',
	heading: 'Work',
	subheading: `Select a project`,
	boxes: [
		{
			id: 1,
			title: 'Tractor Supply Co.',
			subtitle: 'E-commerce website',
			features:
				'React, TypeScript, Micro-Frontend Architecture, Material UI, Storybook, Jest, React Testing Library, Cypress',
			desc: 'As Lead Frontend Engineer on the Homepage and Global Navigation teams, I worked with a large team of engineers, UX experts, and business stakeholders to spearhead the migration of a Fortune 300 e-commerce platform to React/Next.js and micro-frontends, cutting LCP by 60% and CLS by 93%, resulting in record-breaking engagement.',
			image: '/tsc-home.jpg',
			link: 'https://www.tractorsupply.com/',
			classNames: 'bg-indigo-50',
			color: '#eef2ff',
		},
		{
			id: 2,
			title: 'Jane Marketplace',
			subtitle: 'E-commerce dashboard',
			features:
				'React, TypeScript, Styled Components, GraphQL, Angular, Storybook, Jest',
			desc: 'As lead frontend developer on the Seller Tools team, I worked with backend engineers, designers, and product managers to optimize UX and regularly release new features. We reduced friction in our onboarding flow by integrating with Plaid to support Instant Account Verification. We improved product filter and search performance by 800% by moving to client-side logic. Finally, we built an entirely new product creation form, which, upon its release, reduced the time from product creation to listing from days to minutes.',
			image: '/jane-home.jpg',
			link: 'https://www.jane.com',
			classNames: 'bg-indigo-100',
			color: '#e0e7ff',
		},
		{
			id: 3,
			title: 'Marigold Marketing',
			subtitle: 'Lead generation marketing',
			features:
				'React, WordPress, Gatsby, Next.js, GraphQL,  CSS Animations, Personalized Content, A/B Testing',
			desc: 'I worked with a small team of talented frontend developers to build, maintain, and optimize a suite of high traffic, lead-generation marketing sites. We used React, Gatsby, headless WordPress, and Next.js to build performant, SEO-optimized sites. Using eye-catching CSS animations, personalized content, and rigorous A/B testing, our mission was to continually optimize conversion across all brands.',
			image: '/marigold-home.jpg',
			link: 'https://meetmarigold.com/',
			classNames: 'bg-indigo-200',
			color: '#c7d2fe',
		},
		{
			id: 4,
			title: 'Third Man Records',
			subtitle: 'Independent record label',
			features: 'UX Design, SilverStripe CMS, HTML & CSS',
			desc: 'Led a holistic site redesign and developed a modular frontend using Vue.js on top of SilverStripe CMS. For this project, I developed a lightweight CSS framework to ensure a consistent and responsive layout across all company marketing sites.',
			image: '/tmr-home.jpg',
			link: 'https://thirdmanrecords.com/',
			classNames: 'bg-indigo-300',
			color: '#a5b4fc',
		},
		{
			id: 5,
			title: 'Jack White',
			subtitle: 'Artist website',
			features: 'Responsive design, WordPress, HTML & CSS, jQuery',
			desc: 'Custom WordPress theme development with responsive layout and jQuery.',
			image: '/jw-home.jpg',
			link: 'https://jackwhiteiii.com/',
			classNames: 'bg-indigo-400',
			color: '#818cf8',
		},
		{
			id: 6,
			title: 'The Raconteurs',
			subtitle: 'Artist website',
			features:
				'UX Design, WordPress, Vue.js, SVG Animations, JavaScript Snake Game',
			desc: 'Desgin and develop frontend using Vue.js, animated SVGs, and a JavaScript Snake game.',
			image: '/racs-home.jpg',
			link: 'https://theraconteurs.com/',
			classNames: 'bg-indigo-500',
			color: '#6366f1',
		},
		{
			id: 7,
			title: 'Third Man Pressing',
			subtitle: 'Independent record pressing plant',
			features: 'UX Design, Laravel, Vue.js, Scroll Animations',
			desc: 'Full site redesign and development using Laravel and Vue.js.',
			image: '/tmp-home.jpg',
			link: 'https://thirdmanpressing.com/',
			classNames: 'bg-indigo-600',
			color: '#4f46e5',
		},
	],
};

export default workContent;
