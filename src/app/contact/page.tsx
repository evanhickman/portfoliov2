'use client';
import PageTitle from '@/app/components/ContentContainer';
import BoxContainer from '@/app/components/box';
import { contactBoxes as boxes } from '@/app/components/box';

const Contact = () => {
  return (
    <main>
      {/* @ts-ignore */}
      <PageTitle heading='Contact' />
      <BoxContainer boxes={boxes} active={null} />
    </main>
  );
};

export default Contact;
