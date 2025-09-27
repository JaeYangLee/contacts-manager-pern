import React, { useState } from "react";

function ContactsManagerNewContactForm({
  onAdd,
  isNewContactFormOpen,
  onNewContactFormClose,
}) {
  if (!isNewContactFormOpen) return null;
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !number.trim() || !email.trim()) {
      return;
    }
    onAdd(name, number, email);

    setName("");
    setNumber("");
    setEmail("");
  };

  return (
    <>
      <div className="fixed top-0 bg-black/50 w-screen h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col rounded p-3 bg-white shadow-lg shadow-black/20">
          <h1 className="text-lg">New Contact</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <section className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label>Enter name:</label>
                <input
                  required
                  type="text"
                  placeholder="e.g., Juan Dela Cruz"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-1 rounded px-1"
                />
              </div>
              <div className="flex flex-col">
                <label>Enter phone number:</label>
                <input
                  required
                  type="text"
                  placeholder="+63 912 345 6789"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="border-1 rounded px-1"
                />
              </div>
              <div className="flex flex-col">
                <label>Enter e-mail address:</label>
                <input
                  required
                  type="text"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-1 rounded px-1"
                />
              </div>
            </section>

            <section>
              <div className="flex flex-row gap-2 justify-end">
                <button type="submit" className="px-2 border-1 rounded">
                  Add Contact
                </button>
                <button
                  type="cancel"
                  className="px-2 border-1 rounded"
                  onClick={onNewContactFormClose}
                >
                  Cancel
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactsManagerNewContactForm;
