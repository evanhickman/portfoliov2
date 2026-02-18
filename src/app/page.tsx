'use client'
import BoxContainer from '@/app/components/box/BoxContainer'
import CardContainer from '@/app/components/card/CardContainer'
import { homeContent as content } from '@/app/lib/pageData'

const Home = () => {
  return (
    <main>
      <CardContainer
        content={content}
        active={null}
        heading="Evan Hickman"
        subheading="Frontend Engineer"
      />
      <BoxContainer boxes={content.boxes} active={null} />
    </main>
  )
}

export default Home
