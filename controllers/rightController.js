const Rights = require("../models/rightModel.js");

module.exports = {
  create: async (req, res) => {
    const right = await Rights.create({
      staff_id: req.body.staff_id,
      right: req.body.right,
    });

    const rightData = await right.save();

    return res.send(rightData);
  },
};
