import css from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contactItemContainer}>
      <p>👨‍💼{contact.name}</p>
      <p>📞{contact.number}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
