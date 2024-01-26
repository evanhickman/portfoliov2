import Box from '@/app/components/box/Box'
import { PageContent } from '@/app/_data/page-data'

interface BoxContainerProps {
  boxes: PageContent['boxes']
  active: number | null
  onClick?: (id: number) => void
}

const BoxContainer = ({ boxes, active, onClick }: BoxContainerProps) => {
  return (
    <section
      className={`row-span-1 lg:row-span-0 lg:max-h-screen grid grid-cols-1 grid-rows-${boxes.length} gap-1.5`}
    >
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
