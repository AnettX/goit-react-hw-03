import "./App.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import initialContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifyContacts = localStorage.getItem("contacts");
    if (!stringifyContacts) return initialContacts;

    const parsedContacts = JSON.parse(stringifyContacts);
    return parsedContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const finalUsers = {
      ...formData,
      id: nanoid(),
    };

    setContacts([...contacts, finalUsers]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const [filter, setFilter] = useState("");

  const onChangeContact = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox onChangeContact={onChangeContact} filter={filter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
