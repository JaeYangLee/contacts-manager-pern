import React from "react";

function ContactsManagerContact({ contact, onUpdate, onDelete }) {
  const handleEdit = () => {
    const newName = prompt("Edit Contact:", contact.name) || contact.name;
    const newNumber = prompt("Edit Contact:", contact.number) || contact.number;
    const newEmail = prompt("Edit Contact:", contact.email) || contact.email;

    if (newName || newNumber || newEmail) {
      onUpdate(contact.id, newName, newNumber, newEmail);
    }
  };

  return (
    <>
      <li className="w-full flex flex-row justify-between">
        <section className="flex flex-col">
          <p>{contact.name}</p>
          <span>{contact.number}</span>
          <span>{contact.email}</span>
        </section>

        <section className="flex flex-row gap-2">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </section>
      </li>
    </>
  );
}

export default ContactsManagerContact;
