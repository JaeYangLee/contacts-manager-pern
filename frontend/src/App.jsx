import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import ContactsManagerForm from "./components/contactsManagerForm";

function App() {
  const [contacts, setContacts] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/contacts");
      setContacts(res.data);
    } catch (err) {
      console.error("Error Fetching Contacts:", err.message);
    }
  };

  const addContact = async (name, number, email) => {
    try {
      const res = await axios.post("http://localhost:5000/contacts", {
        name,
        number,
        email,
      });
      setContacts([...contacts, res.data]);
    } catch (err) {
      console.error("Error Adding Contact:", err.message);
    }
  };

  const updateContact = async (id, name, number, email) => {
    try {
      const res = await axios.put(`http://localhost:5000/contacts${id}`, {
        id,
        name,
        number,
        email,
      });
      setContacts(
        contacts.map((contact) => (contact.id === id ? res.data : contact))
      );
    } catch (err) {
      console.error("Error Updating Contact:", err.message);
    }
  };

  const deleteContact = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/contacts${id}`);
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (err) {
      console.error("Error Deleting Contact:", err.message);
    }
  };
  return (
    <>
      <ContactsManagerForm />
    </>
  );
}

export default App;
