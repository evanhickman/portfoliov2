'use client';
import CardContainer from '@/app/components/card/CardContainer';
import BoxContainer, { contactBoxes as boxes } from '@/app/components/box';

const Contact = () => {
  return (
    <main>
      <CardContainer boxes={boxes} heading='Contact' active={null} />
      <BoxContainer boxes={boxes} active={null} />
    </main>
  );
};

export default Contact;
