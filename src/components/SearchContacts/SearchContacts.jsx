import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

import styles from './SearchContacts.module.scss';

const SearchContacts = ({ label, value, onChange }) => {
  return (
    <label className={styles.label}>
      <span className={styles.title}>{label}</span>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(contactsActions.changeFilter(event.currentTarget.value)),
});

SearchContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContacts);
