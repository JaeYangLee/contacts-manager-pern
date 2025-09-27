import React from "react";

function ContactsManagerContact({ contact, onUpdate, onDelete }) {
  return (
    <>
      <li className="w-full flex flex-row justify-between">
        <section className="flex flex-col">
          <p>Hello World!</p>
          <p>{contact.name}</p>
          <span>{contact.number}</span>
          <span>{contact.email}</span>
        </section>

        <section className="flex flex-row gap-2">
          <button onClick={onUpdate}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </section>
      </li>
    </>
  );
}

export default ContactsManagerContact;
