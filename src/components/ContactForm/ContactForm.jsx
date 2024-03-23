const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.currentTarget.elements.contactName.value;
    const number = event.currentTarget.elements.contactNumber.value;

    const formData = {
      name,
      number,
    };

    onAddContact(formData);

    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <br />
        <input type="text" name="contactName" required />
      </label>
      <br />
      <label>
        <span>Number</span>
        <br />
        <input type="tel" name="contactNumber" required />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
