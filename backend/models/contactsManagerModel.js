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

async function findByNumberOrEmail(number, email) {
  //this function I've build is for identifying duplicate number or email
  const result = await pool.query(
    "SELECT * FROM contacts WHERE number = $1 OR email = $2 LIMIT 1",
    [number, email]
  );
  return result.rows[0];
}

const searchContacts = async (search) => {
  const result = await pool.query(
    "SELECT * FROM contacts WHERE name ILIKE $1 OR email ILIKE $1 ORDER BY id ASC ",
    [`%${search}%`]
  );
  return result.rows;
};

module.exports = {
  getContacts,
  searchContacts,
  addContact,
  updateContact,
  deleteContact,
  findByNumberOrEmail,
};
