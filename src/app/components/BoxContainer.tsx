import React from 'react';

interface BoxContainerProps {
  children: React.ReactNode;
}

const BoxContainer: React.FC<BoxContainerProps> = ({ children }) => {
  return (
    <section className='grid grid-cols-1 grid-rows-6 gap-1.5'>
      {children}
    </section>
  );
};

export default BoxContainer;
