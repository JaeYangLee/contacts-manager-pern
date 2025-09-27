import React from "react";
import ContactsManagerContact from "./ContactsManagerContact";

function ContactsManagerContactsList({ contacts = [], onUpdate, onDelete }) {
  return (
    <>
      <ul className="list-disc flex flex-col items-center justify-center">
        {contacts.map((contacts) => (
          <ContactsManagerContact
            key={contacts.id}
            contact={contacts}
            onUpdate={onUpdate}
            onDelete={onDelete}
            className="z-50"
          />
        ))}
      </ul>
    </>
  );
}

export default ContactsManagerContactsList;
