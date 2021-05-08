import React, { Component } from 'react';

import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

import styles from './FormContacts.module.scss';

class FormContacts extends Component {
  state = {
    name: '',
    number: '',
    disabled: true,
  };

  handlChange = event => {
    const { name, value } = event.currentTarget;
    console.log(event);

    this.setState({ [name]: value, disabled: false });
  };

  handlSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', disabled: true });
  };

  render() {
    const { name, number, disabled } = this.state;

    return (
      <form onSubmit={this.handlSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handlChange}
          />
        </label>

        <label className={styles.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handlChange}
          />
        </label>

        <button type="submit" disabled={disabled} className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.handleContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContacts);
