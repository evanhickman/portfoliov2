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
  subheading: 'UI/UX Developer',
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
      desc: 'As lead frontend developer on the Seller Tools team, I worked with backend engineers, designers, and product managers to optimize UX and regularly release new features. We reduced friction in our onboarding flow by integrating with Plaid to support Instant Account Verification. We improved product filter and search performance by 800% by moving to client-side logic. Finally, we built an entirely new product creation form, which, upon its release, reduced the time from product creation to listing from days to minutes.',
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
      desc: 'I worked with a small team of talented frontend developers to build, maintain, and optimize a suite of high traffic, lead-generation marketing sites. We used React, Gatsby, headless WordPress, and Next.js to build performant, SEO-friendly sites. Using eye-catching CSS animations, personalized content, and rigorous A/B testing, our mission was to continually optimize conversion across all brands.',
      image: '',
      classNames: 'bg-indigo-200',
    },
    {
      id: 3,
      title: 'Third Man Records',
      subtitle: 'Independent record label',
      features: 'UX Design, SilverStripe CMS, HTML & CSS',
      link: 'https://thirdmanrecords.com/',
      desc: 'Led a holistic site redesign and developed a modular frontend using Vue.js on top of SilverStripe CMS. For this project, I developed a lightweight CSS framework to ensure a consistent and responsive layout across all company marketing sites.',
      image: '/tmr-home.jpg',
      classNames: 'bg-indigo-300',
    },
    {
      id: 4,
      title: 'Jack White',
      subtitle: 'Artist website',
      features: 'Responsive design, WordPress, HTML & CSS, jQuery',
      link: 'https://jackwhiteiii.com/',
      desc: 'Custom WordPress theme development with responsive layout and jQuery.',
      image: '/jw-home.jpg',
      classNames: 'bg-indigo-400',
    },
    {
      id: 5,
      title: 'The Raconteurs',
      subtitle: 'Artist website',
      features:
        'UX Design, WordPress, Vue.js, SVG Animations, JavaScript Snake Game',
      link: 'https://theraconteurs.com/',
      desc: 'Desgin and develop frontend using Vue.js, animated SVGs, and a JavaScript Snake game.',
      image: '/racs-home.jpg',
      classNames: 'bg-indigo-500',
    },
    {
      id: 6,
      title: 'Third Man Pressing',
      subtitle: 'Independent record pressing plant',
      features: 'UX Design, Laravel, Vue.js, Scroll Animations',
      link: 'https://thirdmanpressing.com/',
      desc: 'Full site redesign and development using Laravel and Vue.js.',
      image: '/tmp-home.jpg',
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
