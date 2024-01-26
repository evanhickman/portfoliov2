export interface PageContent {
  heading: string
  subheading?: string
  boxes: BoxContent[]
}

export interface BoxContent {
  id: number
  title?: string
  subtitle?: string
  desc?: string
  features?: string
  link?: string
  image?: string
  classNames: string
}

export const homeContent: PageContent = {
  heading: 'Evan Hickman',
  subheading: 'UX Developer & Designer',
  boxes: [
    {
      id: 1,
      classNames: 'box-one',
    },
    {
      id: 2,
      classNames: 'box-two',
    },
    {
      id: 3,
      classNames: 'box-three',
    },
    {
      id: 4,
      classNames: 'box-four',
    },
    {
      id: 5,
      classNames: 'box-five',
    },
    {
      id: 6,
      classNames: 'box-six',
    },
  ],
}

export const workContent: PageContent = {
  heading: 'Work',
  subheading: 'Selected projects',
  boxes: [
    {
      id: 1,
      title: 'Jane Marketplace',
      subtitle: 'E-commerce dashboard',
      features:
        'React, TypeScript, Styled Components, GraphQL, Angular, Storybook, Jest',
      desc: 'This section is under construction. Please check back soon.',
      image: '',
      classNames: 'bg-indigo-100',
    },
    {
      id: 2,
      title: 'Marigold Marketing',
      subtitle: 'Lead generation marketing',
      features:
        'React, WordPress, Gatsby, Next.js, GraphQL,  CSS Animations, Personalized Content, A/B Testing',
      link: 'https://meetmarigold.com/',
      desc: 'This section is under construction. Please check back soon.',
      image: '',
      classNames: 'bg-indigo-200',
    },
    {
      id: 3,
      title: 'Third Man Records',
      subtitle: 'Independent record label',
      features: 'UX Design, SilverStripe CMS, HTML & CSS',
      link: 'https://thirdmanrecords.com/',
      desc: 'This section is under construction. Please check back soon.',
      image: '',
      classNames: 'bg-indigo-300',
    },
    {
      id: 4,
      title: 'Jack White',
      subtitle: 'Artist website',
      features: 'Responsive design, WordPress, HTML & CSS, jQuery',
      link: 'https://jackwhiteiii.com/',
      desc: 'This section is under construction. Please check back soon.',
      image: '',
      classNames: 'bg-indigo-400',
    },
    {
      id: 5,
      title: 'The Raconteurs',
      subtitle: 'Artist website',
      features:
        'UX Design, WordPress, Vue.js, SVG Animations, JavaScript Snake Game',
      link: 'https://theraconteurs.com/',
      desc: 'Desgin and develop frontend using Vue.js, animated SVGs, and adding touch support to an open source JavaScript Snake game.',
      image: '',
      classNames: 'bg-indigo-500',
    },
    {
      id: 6,
      title: 'Third Man Pressing',
      subtitle: 'Independent record pressing plant',
      features: 'UX Design, Laravel, Vue.js, Scroll Animations',
      link: 'https://thirdmanpressing.com/',
      desc: 'Full frontend redesign using Vue.js and animation on scroll.',
      image: '',
      classNames: 'bg-indigo-600',
    },
  ],
}

export const contactContent: PageContent = {
  heading: 'Contact',
  boxes: [
    {
      id: 1,
      classNames: 'bg-green-100',
    },
    {
      id: 2,
      classNames: 'bg-green-200',
    },
    {
      id: 3,
      classNames: 'bg-green-300',
    },
    {
      id: 4,
      classNames: 'bg-green-400',
    },
    {
      id: 5,
      classNames: 'bg-green-500',
    },
    {
      id: 6,
      classNames: 'bg-green-600',
    },
  ],
}
