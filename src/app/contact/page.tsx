'use client';
import PageTitle from '../components/ContentContainer';
import BoxContainer from '../components/BoxContainer';
import { contactBoxes as boxes } from '../box-data';

const Contact = () => {
  return (
    <main>
      <PageTitle heading='Contact' />
      <BoxContainer boxes={boxes} />
    </main>
  );
};

export default Contact;
