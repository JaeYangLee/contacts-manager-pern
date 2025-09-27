import React, { useState } from "react";

function ContactsManagerNewContactForm({ onAdd }) {
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
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">New Contact Form</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-col">
            <label>Enter name:</label>
            <input
              required
              type="text"
              placeholder="Enter name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Enter phone number:</label>
            <input
              required
              type="text"
              placeholder="Enter phone number..."
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Enter e-mail address:</label>
            <input
              required
              type="text"
              placeholder="Enter email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add Contact</button>
          <button type="cancel">Cancel</button>
        </form>
      </div>
    </>
  );
}

export default ContactsManagerNewContactForm;
