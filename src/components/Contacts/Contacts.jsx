import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { filterContacts } from 'redux/contacts/filterSlice';
import { deleteContact, getAllContacts } from 'redux/contacts/operations';

import {
  ContactItem,
  ContainerContacts,
  DeleteBtn,
  Input,
  Label,
  ListContacts,
  Title,
} from './Contacts.style';

const Contacts = ({ title }) => {
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const onFilter = e => {
    const filterValue = e.target.value;
    dispatch(filterContacts(filterValue));
  };

  const onItemDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredSearch = () => {
    const normaliseFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normaliseFilter)
    );
  };

  return (
    <ContainerContacts>
      <Title>{title}</Title>

      <Label>Find contacts by name</Label>
      <Input type="text" name="filter" value={filter} onChange={onFilter} />

      <ListContacts>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {items.length > 0 &&
          filteredSearch().map(({ id, name, number }) => (
            <ContactItem key={id}>
              <p>
                {name}: {number}
              </p>
              <DeleteBtn
                variant="contained"
                size="small"
                color="error"
                type="button"
                onClick={() => {
                  onItemDelete(id);
                }}
              >
                Delete
              </DeleteBtn>
            </ContactItem>
          ))}
      </ListContacts>
    </ContainerContacts>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Contacts;
