'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Card from '@/app/components/card/Card'
import { PageContent } from '@/app/_data'

type CardContainerProps = {
  heading: string
  subheading?: string
  content: PageContent
  active: number | null
}

const CardContainer: React.FC<CardContainerProps> = ({
  heading,
  subheading,
  content,
  active,
}) => {
  const activeBox = content?.boxes?.filter((box) => box.id === active)[0]
  return (
    <div className="row-span-2 lg:row-span-0 lg:max-h-screen flex flex-col justify-center px-12 pt-24 pb-12 overflow-y-scroll">
      <AnimatePresence mode="wait">
        {active === null ? (
          <motion.div
            className="h-full flex flex-col justify-center"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ opacity: '0' }}
            transition={{ type: 'spring', duration: 0.5 }}
            layout
            key="title-container"
          >
            <Card heading={heading} subheading={subheading} />
          </motion.div>
        ) : (
          <motion.div
            className="h-full flex flex-col overflow-scroll"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ opacity: '0' }}
            transition={{ type: 'spring', duration: 0.5 }}
            key={activeBox?.id}
            layout
          >
            <Card
              contentTitle={activeBox?.title}
              contentSubtitle={activeBox?.subtitle}
              link={activeBox?.link}
              image={activeBox?.image}
              features={activeBox?.features}
              desc={activeBox?.desc}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CardContainer
