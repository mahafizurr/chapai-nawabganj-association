// upload.js

const multer = require("multer");
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/notices/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${fileExtension}`);
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 }, // 1MB
}).single("file"); // 'photo' should match the name attribute in your HTML form

module.exports = upload;
