'use client'
import BoxContainer from '@/app/components/box/BoxContainer'
import CardContainer from '@/app/components/card/CardContainer'
import { contactContent as content } from '@/app/lib/pageData'

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
