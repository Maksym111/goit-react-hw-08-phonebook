import SectionTitle from 'components/SectionTitle';
import PhoneBookForm from 'components/Form/Form';
import Contacts from 'components/Contacts';
import { Container } from 'components/App/App.styled';

const ContactsPage = () => {
  return (
    <Container>
      <SectionTitle title="Phonebook" />
      <PhoneBookForm />
      <Contacts title={'Contacts'} />
    </Container>
  );
};

export default ContactsPage;
