import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {Array.isArray(contacts) &&
        contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDeleteContact={() => onDeleteContact(contact.id)}
            />
          );
        })}
    </div>
  );
};

export default ContactList;
