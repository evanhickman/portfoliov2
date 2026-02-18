import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  heading: string
  subheading: string
  contentTitle: string
  contentSubtitle: string
  desc: string
  link: string
  features: string
  image: string
}

export default function Card({
  heading,
  subheading,
  contentTitle,
  contentSubtitle,
  desc,
  link,
  features,
  image,
}: Partial<CardProps>) {
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
      {link && (
        <Link
          href={link}
          className="mt-3 border-solid border-cyan-100 color-shift-text hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Site
        </Link>
      )}
      {image && (
        <Image
          src={image}
          alt="Screenshot of site"
          className="mt-6 rounded-md shadow-md"
          width={1500}
          height={780}
        />
      )}
      {features && <p className="mt-6 italic">{features}</p>}
      {desc && <p className="mt-3">{desc}</p>}
    </>
  )
}
