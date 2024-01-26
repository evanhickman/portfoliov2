import Link from 'next/link'

type CardProps = {
  heading: string
  subheading: string
  contentTitle: string
  contentSubtitle: string
  desc: string
  link: string
  features: string
  image: string
}

const Card: React.FC<Partial<CardProps>> = ({
  heading,
  subheading,
  contentTitle,
  contentSubtitle,
  desc,
  link,
  features,
  image,
}) => {
  return (
    <>
      {heading && <h1 className="text-5xl">{heading}</h1>}
      {subheading && (
        <h2 className="text-4xl mt-3 color-shift-text">{subheading}</h2>
      )}
      {contentTitle && <h1 className="text-5xl">{contentTitle}</h1>}
      {contentSubtitle && (
        <h2 className="text-3xl mt-3 color">{contentSubtitle}</h2>
      )}
      {features && <p className="mt-3 italic">{features}</p>}
      {link && (
        <Link
          href={link}
          className="mt-8 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </Link>
      )}
      {desc && <p className="mt-3">{desc}</p>}
    </>
  )
}

export default Card
