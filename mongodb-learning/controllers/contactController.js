// Get All contacts

const getContact = (req, res) => {
  res.status(200).json({ message: `Get all contacts` });
};

// Post a contact

const createContact = (req, res) => {
  res.status(201).json({ message: "Create a new contact" });
};

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete a contact for ${req.params.id}` });
};

module.exports = {
  getContact,
  createContact,
  deleteContact,
  updateContact,
};
