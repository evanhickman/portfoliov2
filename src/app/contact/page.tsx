'use client';
import Box from '../components/Box';
import PageTitle from '../components/PageTitle';
import BoxContainer from '../components/BoxContainer';
import { contactBoxes } from '../box-data';

const Contact = () => {
  return (
    <main>
      <PageTitle heading='Contact' />
      <BoxContainer>
        {contactBoxes.map((box, index) => (
          <Box
            title={box?.title}
            id={box.id}
            classNames={`${box.classNames}`}
            key={box.id}
          />
        ))}
      </BoxContainer>
    </main>
  );
};

export default Contact;
