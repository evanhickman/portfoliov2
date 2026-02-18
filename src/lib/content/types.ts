interface BoxContent {
  id: number
  title?: string
  subtitle?: string
  desc?: string
  features?: string
  link?: string
  image?: string
  classNames: string
}

export interface PageContent {
  heading: string
  subheading?: string
  boxes: BoxContent[]
}
