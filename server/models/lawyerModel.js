const mongoose = require("mongoose");

// Define a Mongoose schema for your data
const lawyerSchema = new mongoose.Schema({
  SERIALNUMBER: {
    type: String,
    required: true,
  },
  BBCNUMBER: {
    type: String,
    required: true,
  },
  ADVOCATENAME: {
    type: String,
    required: true,
  },
  FATHERNAME: {
    type: String,
    required: true,
  },
  ADDRESS: {
    type: String,
    required: true,
  },
  PHONENUMBER: {
    type: String, // You can use a more specific type like Number for phone numbers
    required: true,
  },
  JOININGDATE: {
    type: String,
    required: true,
  },
  ENROLLMENTDATE: {
    type: String,
    required: true,
  },

  REMARK: {
    type: String,
  },
});

// Create a Mongoose model using the schema
const Lawyer = mongoose.model("Lawyer", lawyerSchema);

module.exports = Lawyer;
