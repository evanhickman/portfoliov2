export interface PageContent {
  heading: string
  subheading?: string
  boxes: BoxContent[]
}

export interface BoxContent {
  id: number
  title?: string
  description?: string
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
  boxes: [
    {
      id: 1,
      title: 'Jane Seller Dashboard',
      description: 'More info coming soon...',
      link: 'http://example.com',
      image: '',
      classNames: 'bg-yellow-100',
    },
    {
      id: 2,
      title: 'Marigold Relationship Marketing',
      description: 'More info coming soon...',
      link: 'http://example.com',
      image: '',
      classNames: 'bg-yellow-200',
    },
    {
      id: 3,
      title: 'Third Man Records',
      description: 'More info coming soon...',
      link: 'http://example.com',
      image: '',
      classNames: 'bg-yellow-300',
    },
    {
      id: 4,
      title: 'Jack White',
      description: 'More info coming soon...',
      link: 'http://example.com',
      image: '',
      classNames: 'bg-yellow-400',
    },
    {
      id: 5,
      title: 'The Racounteurs',
      description: 'More info coming soon...',
      link: 'http://example.com',
      image: '',
      classNames: 'bg-yellow-500',
    },
    {
      id: 6,
      title: 'Third Man Pressing',
      description: 'More info coming soon...',
      link: 'http://example.com',
      image: '',
      classNames: 'bg-yellow-600',
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
      title: 'Coming soon...',
    },
    {
      id: 5,
      classNames: 'bg-green-500',
    },
    {
      id: 6,
      classNames: 'bg-green-600',
    },
    {
      id: 7,
      classNames: 'bg-green-700',
    },
  ],
}
