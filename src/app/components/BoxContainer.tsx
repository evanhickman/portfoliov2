import React from 'react';
import { BoxItem } from '../box-data';
import Box from './Box';

interface BoxContainerProps {
  boxes: BoxItem[];
}

const BoxContainer = ({ boxes }: BoxContainerProps) => {
  return (
    <section className='grid grid-cols-1 grid-rows-6 gap-1.5'>
      {boxes.map((box) => (
        <Box
          id={box?.id}
          title={box?.title}
          description={box?.description}
          link={box?.link}
          image={box?.image}
          classNames={box?.classNames}
          key={box.id}
        />
      ))}
    </section>
  );
};

export default BoxContainer;
