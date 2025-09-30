import { useState, useEffect, use } from "react";
import axios from "axios";
import "./index.css";
import ContactsManagerNewContactForm from "./components/ContactsManagerNewContactForm";
import ContactsManagerContactsList from "./components/ContactsManagerContactsList";
import ContactManagerSearchBar from "./components/ContactManagerSearchBar";
import ContactsManagerEditForm from "./components/ContactsManagerEditForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [isNewContactFormOpen, setNewContactForm] = useState(false);
  const [isEditFormOpen, setEditFormOpen] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, [search]);

  const fetchContacts = async () => {
    try {
      let url = "http://localhost:5000/contacts";

      if (search) {
        url += `?search=${encodeURIComponent(search)}`;
      }

      const res = await axios.get(url);
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
      const res = await axios.put(`http://localhost:5000/contacts/${id}`, {
        id,
        name,
        number,
        email,
      });
      setContacts(
        contacts.map((contacts) => (contacts.id === id ? res.data : contacts))
      );
    } catch (err) {
      console.error("Error Updating Contact:", err.message);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contacts/${id}`);
      setContacts(contacts.filter((contacts) => contacts.id !== id));
    } catch (err) {
      console.error("Error Deleting Contact:", err.message);
    }
  };
  return (
    <>
      <div className="w-screen h-screen bg-[#fff2e9]">
        <header className="flex flex-col items-center justify-center gap-2 p-2">
          <h1 className="text-2xl font-bold">Contacts Manager App</h1>
          <div className="flex flex-row items-center justify-center gap-2">
            <ContactManagerSearchBar search={search} setSearch={setSearch} />
            <button
              type="button"
              onClick={() => setNewContactForm(true)}
              className="bg-yellow-300 button border-1 p-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </header>

        <main>
          <ContactsManagerContactsList
            contacts={contacts}
            onUpdate={updateContact}
            onDelete={deleteContact}
          />

          <ContactsManagerEditForm />
        </main>

        <ContactsManagerNewContactForm
          onAdd={addContact}
          isNewContactFormOpen={isNewContactFormOpen}
          onNewContactFormClose={() => setNewContactForm(false)}
        />
      </div>
    </>
  );
}

export default App;
