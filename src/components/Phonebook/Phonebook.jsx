import React from 'react';
// import PropTypes from 'prop-types';

import Section from '../Section';
import FormContacts from '../FormContacts';
import SearchContacts from '../SearchContacts';
import ContactsList from '../ContactsList';

import styles from './Phonebook.module.scss';

const Phonebook = () => {
  return (
    <div className={styles.phonebook}>
      <Section title="Phonebook">
        <FormContacts />
      </Section>
      <Section title="Contacts">
        <SearchContacts label="Find contacts by name" />
        <ContactsList />
      </Section>
    </div>
  );
};

export default Phonebook;
