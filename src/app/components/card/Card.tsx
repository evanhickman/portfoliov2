type CardProps = {
  heading?: string
  subheading?: string
  desc?: string
  link?: string
  features?: string
  image?: string
}

const Card: React.FC<CardProps> = ({
  heading,
  subheading,
  desc,
  link,
  features,
  image,
}) => {
  return (
    <>
      <h1 className="text-6xl">{heading}</h1>
      {subheading && (
        <h2 className="text-4xl mt-8 color-shift-text">{subheading}</h2>
      )}
      {desc && <p className="mt-6 text-3xl">{desc}</p>}
      {features && <p className="mt-6">{features}</p>}
    </>
  )
}

export default Card
