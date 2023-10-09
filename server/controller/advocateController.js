const multer = require("multer");
const path = require("path");
const adv = require("../model/advocateModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname);
    const filename = Date.now() + extension; // Rename the file with a timestamp
    cb(null, filename);
  },
});

const upload = multer({ storage });

exports.uploadPhoto = upload.single("photo");

exports.createUser = async (req, res) => {
  const { name, father_name, joining_date, address, phone } = req.body;
  const photo = req.file ? req.file.filename : null; // Check if a file was uploaded

  try {
    const advocateCreate = new adv({
      name,
      father_name,
      joining_date,
      address,
      phone,
      photo,
    });

    await advocateCreate.save(); // Save the user information to the database

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "User creation failed" });
  }
};
