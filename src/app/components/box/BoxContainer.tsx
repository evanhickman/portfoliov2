import Box from '@/app/components/box/Box'
import { PageContent } from '@/app/_data/page-data'

interface BoxContainerProps {
  boxes: PageContent['boxes']
  active: number | null
  setActive?: (id: number) => void
  onClick?: (id: number) => void
}

const BoxContainer = ({
  boxes,
  active,
  setActive,
  onClick,
}: BoxContainerProps) => {
  return (
    <section className={`grid grid-cols-1 grid-rows-${boxes.length} gap-1.5`}>
      {boxes.map((box) => (
        <Box
          id={box?.id}
          title={box?.title}
          classNames={box?.classNames}
          active={active}
          onClick={onClick}
          key={box.id}
        />
      ))}
    </section>
  )
}

export default BoxContainer
