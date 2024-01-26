'use client'
import CardContainer from '@/app/components/card/CardContainer'
import BoxContainer from '@/app/components/box'
import { contactContent as content } from '@/app/_data'

const Contact = () => {
  return (
    <main>
      <CardContainer
        content={content}
        heading="Contact"
        subheading="Coming soon"
        active={null}
      />
      <BoxContainer boxes={content.boxes} active={null} />
    </main>
  )
}

export default Contact
