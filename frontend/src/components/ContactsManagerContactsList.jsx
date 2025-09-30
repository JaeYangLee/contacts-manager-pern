import React, { useState } from "react";
import ContactsManagerContact from "./ContactsManagerContact";

function ContactsManagerContactsList({ contacts = [], onUpdate, onDelete }) {
  const [contacts2, setContacts2] = useState([]);
  return (
    <>
      <ul className="flex flex-col items-center justify-center list-disc border-b-1 border-t-1">
        {contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-4 opacity-50">
            <p className="text-lg">No Contacts here...</p>
            <p className="text-sm">Try socializing more...</p>
            <p className="text-sm">Go touch some grass!</p>
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
