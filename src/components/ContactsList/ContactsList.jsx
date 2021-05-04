import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

import ContactItem from '../ContactItem';

import styles from './ContactsList.module.scss';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={() => onDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const showListContacts = items.filter(({ name }) =>
    name.includes(normalizedFilter),
  );

  return { contacts: showListContacts };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
