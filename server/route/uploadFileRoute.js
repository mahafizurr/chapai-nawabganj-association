const express = require("express");
const uploadFileController = require("../controller/uploadFileController");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/"); // Define the destination directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Rename the file with a unique name
  },
});
const upload = multer({ storage });

router.post(
  "/upload-file",
  upload.single("file"),
  uploadFileController.uploadFile
);
router.get("/upload-file/:id", uploadFileController.getFile);
router.delete("/upload-file/:id", uploadFileController.deleteFile);

module.exports = router;
