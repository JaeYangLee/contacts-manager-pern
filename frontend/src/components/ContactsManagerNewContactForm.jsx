import React, { useState, useEffect } from "react";
import ContactsManagerSuccessModal from "./ContactsManagerSuccessModal";

function ContactsManagerNewContactForm({
  onAdd,
  isNewContactFormOpen,
  onNewContactFormClose,
}) {
  if (!isNewContactFormOpen) return null;
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !number.trim() || !email.trim()) {
      return;
    } else {
    }

    onAdd(name, number, email);
    setSuccessModalOpen(true);
    setName("");
    setNumber("");
    setEmail("");
  };

  return (
    <>
      <div
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen bg-black/50"
        onClick={onNewContactFormClose}
      >
        <div
          className="flex flex-col rounded px-5 py-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.75)] bg-[#fff2e9] border-1"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="mb-4 text-2xl font-bold">Add New Contact</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12">
            <section className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label className="text-sm opacity-70">Enter name:</label>
                <input
                  required
                  type="text"
                  placeholder="e.g., Juan Dela Cruz"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-2 text-sm rounded border-1 placeholder:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm opacity-70">
                  Enter phone number:
                </label>
                <input
                  required
                  type="text"
                  placeholder="+63 912 345 6789"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="p-2 text-sm rounded border-1 placeholder:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm opacity-70">
                  Enter e-mail address:
                </label>
                <input
                  required
                  type="text"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  Add Contact
                </button>
                <button
                  type="button"
                  className="px-2 text-sm rounded border-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                  onClick={onNewContactFormClose}
                >
                  <span className="text-black/60">Cancel</span>
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>

      <ContactsManagerSuccessModal
        key={name}
        contact={name}
        isSuccessModalOpen={isSuccessModalOpen}
        onSuccessModalClose={
          (() => setSuccessModalOpen(false), onNewContactFormClose)
        }
        title={"Contact Added!"}
        message={`is now on your contact list!`}
      />
    </>
  );
}

export default ContactsManagerNewContactForm;
