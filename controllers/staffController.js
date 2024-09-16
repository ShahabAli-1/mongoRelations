const Staff = require("../models/staffModel.js");

module.exports = {
  create: async (req, res) => {
    const { name, email } = req.body;
    const staff = await Staff.create({
      name,
      email,
    });
    return res.send(staff);
  },
};
