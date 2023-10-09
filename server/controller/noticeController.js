const multer = require("multer");
const path = require("path");
const addNotice = require("../model/noticeModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "notices/");
  },
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname);
    const filename = Date.now() + extension; // Rename the file with a timestamp
    cb(null, filename);
  },
});

const upload = multer({ storage });

exports.upload = upload.single("file");

exports.createFile = async (req, res) => {
  const file = req.file ? req.file.filename : null; // Check if a file was uploaded

  try {
    const fileCreate = new addNotice({
      file,
    });

    await fileCreate.save(); // Save the user information to the database

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "User creation failed" });
  }
};
