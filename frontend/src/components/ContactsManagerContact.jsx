import React, { useState } from "react";
import ContactsManagerDeleteValidator from "./ContactsManagerDeleteValidator";

function ContactsManagerContact({ contact, onUpdate, onDelete }) {
  const [isDeleteValidatorOpen, setDeleteValidatorOpen] = useState(false);

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
      <li className="relative flex flex-row items-center justify-between w-full px-2 py-4 border-b-1">
        <section className="flex flex-row items-start justify-start gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="p-1 rounded-full size-12 border-1"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="flex flex-col">
            <p className="text-sm font-bold truncate w-46">{contact.name}</p>
            <span className="text-xs font-light">{contact.number}</span>
            <span className="text-xs font-light truncate w-46">
              {contact.email}
            </span>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <button
            className="px-1 text-xs bg-blue-300 border rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="px-1 text-xs bg-red-400 border rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
            onClick={() => setDeleteValidatorOpen(true)}
          >
            Delete
          </button>
        </section>
      </li>

      <ContactsManagerDeleteValidator
        key={contact}
        contact={contact.name}
        onDelete={() => onDelete(contact.id)}
        isDeleteValidatorOpen={isDeleteValidatorOpen}
        onDeleteValidatorClose={() => setDeleteValidatorOpen(false)}
      />
    </>
  );
}

export default ContactsManagerContact;
