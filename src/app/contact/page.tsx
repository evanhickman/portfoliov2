'use client';
import CardContainer from '@/app/components/card/CardContainer';
import BoxContainer, { contactBoxes as boxes } from '@/app/components/box';

const Contact = () => {
  return (
    <main>
      {/* @ts-ignore */}
      <CardContainer heading='Contact' />
      <BoxContainer boxes={boxes} active={null} />
    </main>
  );
};

export default Contact;
