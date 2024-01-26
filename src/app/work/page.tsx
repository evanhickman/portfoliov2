'use client'
import { useState } from 'react'
import CardContainer from '@/app/components/card'
import BoxContainer from '@/app/components/box'
import { workContent as content } from '@/app/_data'

const Work = () => {
  const [active, setActive] = useState<number | null>(null)

  const onClick = (id: number) => {
    setActive((prevId) => (prevId === id ? null : id))
  }

  return (
    <main>
      <CardContainer content={content} active={active} heading="Work" />
      <BoxContainer
        boxes={content.boxes}
        active={active}
        setActive={setActive}
        onClick={onClick}
      />
    </main>
  )
}

export default Work
