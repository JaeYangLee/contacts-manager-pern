import React from "react";
import ContactsManagerContact from "./ContactsManagerContact";

function ContactsManagerContactsList({ contacts = [], onUpdate, onDelete }) {
  return (
    <>
      <ul className="list-disc flex flex-col items-center justify-center">
        {contacts.length === 0 ? (
          <div>
            <p>Contacts list is empty...</p>
          </div>
        ) : (
          contacts.map((contacts) => (
            <ContactsManagerContact
              key={contacts.id}
              contact={contacts}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))
        )}
      </ul>
    </>
  );
}

export default ContactsManagerContactsList;
