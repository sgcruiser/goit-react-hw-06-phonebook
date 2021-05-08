import styles from './ContactItem.module.scss';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.contact__item}>
      <span className={styles.contact__name}>{contact.name}</span>
      <span className={styles.contact__number}>{contact.number}</span>
      <button
        type="button"
        className={styles.contact__button}
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
