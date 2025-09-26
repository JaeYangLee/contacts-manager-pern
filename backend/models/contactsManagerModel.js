const pool = require("../database/database");

const getContacts = async () => {
  const result = await pool.query("SELECT * FROM contacts");
  return result.rows;
};

const addContact = async (name, number, email) => {
  const result = await pool.query(
    "INSERT INTO contacts (name, number, email) VALUES ($1, $2, $3) RETURNING *",
    [name, number, email]
  );
  return result.rows[0];
};

const updateContact = async (id, name, number, email) => {
  const result = await pool.query(
    "UPDATE contacts SET name = $1, number = $2, email = $3 WHERE id = $4 RETURNING *",
    [name, number, email, id]
  );
  return result.rows[0];
};

const deleteContact = async (id) => {
  const result = await pool.query(
    "DELETE FROM contacts WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};

module.exports = {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
};
