import React, { useState } from "react";
import ContactsManagerSuccessModal from "./ContactsManagerSuccessModal";

function ContactsManagerEditForm({
  contact,
  onUpdate,
  isEditFormOpen,
  onEditFormClose,
}) {
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();
    onUpdate(contact.id, newName, newNumber, newEmail);
    setSuccessModalOpen(true);
  };

  if (!isEditFormOpen) return null;

  return (
    <>
      <div
        className="fixed z-60 flex flex-col items-center justify-center top-0 bg-black/60 w-screen h-screen"
        onClick={onEditFormClose}
      >
        <div
          className="flex flex-col rounded px-5 py-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.75)] bg-[#fff2e9] border-1"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="mb-4 text-2xl font-bold">Edit Contact</h1>

          <form
            onSubmit={handleEdit}
            type="submit"
            className="flex flex-col gap-12"
          >
            <section className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label className="text-sm opacity-70">Edit name:</label>
                <input
                  value={newName}
                  type="text"
                  placeholder={contact.name}
                  onChange={(e) => setNewName(e.target.value)}
                  className="p-2 text-sm rounded border-1 placeholder:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm opacity-70">Edit phone number:</label>
                <input
                  value={newNumber}
                  type="text"
                  placeholder={contact.number}
                  onChange={(e) => setNewNumber(e.target.value)}
                  className="p-2 text-sm rounded border-1 placeholder:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm opacity-70">
                  Edit e-mail address:
                </label>
                <input
                  value={newEmail}
                  type="text"
                  placeholder={contact.email}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="p-2 text-sm rounded border-1 placeholder:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                />
              </div>
            </section>

            <section>
              <div className="flex flex-row justify-end gap-2">
                <button
                  type="submit"
                  className="px-2 text-sm rounded border-1 bg-green-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                >
                  Submit Edit
                </button>
                <button
                  type="button"
                  className="px-2 text-sm rounded border-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                >
                  <span className="text-black/60" onClick={onEditFormClose}>
                    Cancel
                  </span>
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>

      <ContactsManagerSuccessModal
        contact={`${newName}'s `}
        isSuccessModalOpen={isSuccessModalOpen}
        onSuccessModalClose={() => {
          setSuccessModalOpen(false);
          onEditFormClose();
        }}
        title={"Contact Updated!"}
        message={"details were successfully updated."}
      />
    </>
  );
}

export default ContactsManagerEditForm;
