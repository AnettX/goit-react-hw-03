const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li>
      <p>👨‍💼{contact.name}</p>
      <p>📞{contact.number}</p>
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
