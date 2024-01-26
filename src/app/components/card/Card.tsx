type CardProps = {
  heading: string
  subheading?: string
  desc?: string
  link?: string
  features?: string[]
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
      <h1 className="text-8xl">{heading}</h1>
      {subheading && (
        <h2 className="text-5xl color-shift-text">{subheading}</h2>
      )}
    </>
  )
}

export default Card
