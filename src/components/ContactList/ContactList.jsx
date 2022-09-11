// import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { Contacts } from './ContactList.styled';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'Redux/contactsSlice';
import { changeFilterValue } from 'Redux/filterSlice';
import { toast } from 'react-toastify';

export function ContactList() {
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const value = useSelector(changeFilterValue);

  const getFilteredContacts = () => {
    const normalizedFilter = value.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <>
      <Contacts>
        {filteredContacts ? (
          filteredContacts?.map(({ id, name, phone }) => {
            return (
              <ContactListItem
                key={id}
                name={name}
                number={phone}
                onClick={() => {
                  deleteContact(id);
                  toast.error(`${name} is delete`);
                }}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </Contacts>
      {contacts?.length === 0 && <p>Contacts List is empty</p>}
    </>
  );
}
