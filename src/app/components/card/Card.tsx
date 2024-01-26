type CardProps = {
  heading: string
  subheading?: string
}

const Card: React.FC<CardProps> = ({ heading, subheading }) => {
  return (
    <>
      <h1 className="text-8xl">{heading}</h1>
      <h2 className="text-5xl color-shift-text">{subheading}</h2>
    </>
  )
}
