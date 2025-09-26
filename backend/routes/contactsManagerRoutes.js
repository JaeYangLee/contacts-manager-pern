const contactsManagerController = require("../controllers/contactsManagerController");
const express = require("express");
const router = express.Router();

router.get("/", contactsManagerController.getContacts);
router.post("/", contactsManagerController.addContact);
router.put("/:id", contactsManagerController.updateContact);
router.delete("/:id", contactsManagerController.deleteContact);

module.exports = router;
