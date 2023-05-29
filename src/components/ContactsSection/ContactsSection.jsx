import SectionTitle from 'components/SectionTitle';
import PhoneBookForm from 'components/Form/Form';
import Contacts from 'components/Contacts';
import { Container } from './ContactsSection.styled';

export const ContactsSection = () => {
  return (
    <Container>
      <SectionTitle title="Phonebook" />
      <PhoneBookForm />
      <Contacts title={'Contacts'} />
    </Container>
  );
};
