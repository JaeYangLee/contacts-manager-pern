const contactsManagerModel = require("../models/contactsManagerModel");
const { isValidEmail, isValidNumber } = require("../utils/validators");

const getContacts = async (req, res) => {
  try {
    const { search } = req.query;
    let allContacts;

    if (search) {
      allContacts = await contactsManagerModel.searchContacts(search);
    } else {
      allContacts = await contactsManagerModel.getContacts();
    }
    res.json(allContacts);
  } catch (err) {
    console.error("Error Fetching Contacts!", err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const addContact = async (req, res) => {
  const { name, number, email } = req.body;

  if (!isValidNumber(number)) {
    return res.status(400).json({ message: "Invalid Number!" });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid Email Address!" });
  }

  try {
    const newContact = await contactsManagerModel.addContact(
      name,
      number,
      email
    );
    res.json(newContact);
  } catch (err) {
    console.error("Error Adding Contact!", err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, number, email } = req.body;

  if (!isValidNumber(number)) {
    return res.status(400).json({ message: "Invalid Number!" });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid Email Address!" });
  }

  try {
    const updatedContact = await contactsManagerModel.updateContact(
      id,
      name,
      number,
      email
    );
    res.json(updatedContact);
  } catch (err) {
    console.error("Error Updating Contact!", err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await contactsManagerModel.deleteContact(id);
    if (!deletedContact) {
      return res.status(400).json({ message: "Contact Not Found!" });
    } else {
      return res.status(200).json({ message: "Contact Deleted..." });
    }
  } catch (err) {
    console.error("Error Deleting Contact!", err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
};
