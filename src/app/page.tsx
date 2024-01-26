'use client'
import CardContainer from '@/app/components/card'
import BoxContainer from '@/app/components/box'
import { homeContent as content } from '@/app/_data'

const Home = () => {
  return (
    <main>
      <CardContainer
        content={content}
        active={null}
        heading="Evan Hickman"
        subheading="UX Developer & Designer"
      />
      <BoxContainer boxes={content.boxes} active={null} />
    </main>
  )
}

export default Home
