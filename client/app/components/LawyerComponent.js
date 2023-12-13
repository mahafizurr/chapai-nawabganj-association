"use client";
import React, { useState, useEffect } from "react";

const LawyerComponent = () => {
  const [lawyers, setLawyers] = useState([]);
  const [newLawyer, setNewLawyer] = useState({
    SERIALNUMBER: "",
    BBCNUMBER: "",
    ADVOCATENAME: "",
    FATHERNAME: "",
    ADDRESS: "",
    PHONENUMBER: "",
    JOININGDATE: "",
    ENROLLMENTDATE: "",
    REMARK: "",
  });

  const handleInputChange = (field, value) => {
    setNewLawyer((prevLawyer) => ({ ...prevLawyer, [field]: value }));
  };

  const apiUrl = "http://localhost:8000/lawyers"; // Replace with your API endpoint

  // Function to fetch all lawyers
  const fetchLawyers = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setLawyers(data);
      } else {
        console.error("Error fetching lawyers: ", response.status);
      }
    } catch (error) {
      console.error("Error fetching lawyers: ", error);
    }
  };

  // Function to create a new lawyer
  const createLawyer = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLawyer),
      });

      if (response.ok) {
        setNewLawyer({
          SERIALNUMBER: "",
          BBCNUMBER: "",
          ADVOCATENAME: "",
          FATHERNAME: "",
          ADDRESS: "",
          PHONENUMBER: "",
          JOININGDATE: "",
          ENROLLMENTDATE: "",

          REMARK: "",
        });
        fetchLawyers();
      } else {
        console.error("Error creating lawyer: ", response.status);
      }
    } catch (error) {
      console.error("Error creating lawyer: ", error);
    }
  };

  // Function to update a lawyer

  // Function to delete a lawyer
  const deleteLawyer = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchLawyers();
      } else {
        console.error("Error deleting lawyer: ", response.status);
      }
    } catch (error) {
      console.error("Error deleting lawyer: ", error);
    }
  };

  useEffect(() => {
    fetchLawyers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Upload Data */}
      <h2 className="text-2xl font-bold mb-4">Create Lawyer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label>Serial Number:</label>
          <input
            type="text"
            value={newLawyer.SERIALNUMBER}
            onChange={(e) => handleInputChange("SERIALNUMBER", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label>BBC Number:</label>
          <input
            type="text"
            value={newLawyer.BBCNUMBER}
            onChange={(e) => handleInputChange("BBCNUMBER", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label>Advocate Name:</label>
          <input
            type="text"
            value={newLawyer.ADVOCATENAME}
            onChange={(e) => handleInputChange("ADVOCATENAME", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label>Father Name:</label>
          <input
            type="text"
            value={newLawyer.FATHERNAME}
            onChange={(e) => handleInputChange("FATHERNAME", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={newLawyer.ADDRESS}
            onChange={(e) => handleInputChange("ADDRESS", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={newLawyer.PHONENUMBER}
            onChange={(e) => handleInputChange("PHONENUMBER", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label>Joining Date:</label>
          <input
            type="text"
            value={newLawyer.JOININGDATE}
            onChange={(e) => handleInputChange("JOININGDATE", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label>Enrollment Date:</label>
          <input
            type="text"
            value={newLawyer.ENROLLMENTDATE}
            onChange={(e) =>
              handleInputChange("ENROLLMENTDATE", e.target.value)
            }
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label>Remark:</label>
          <input
            type="text"
            value={newLawyer.REMARK}
            onChange={(e) => handleInputChange("REMARK", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>
      <button
        onClick={createLawyer}
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        Create
      </button>

      {/* Get Data */}
      <h2>Lawyers List</h2>
      <ul>
        {lawyers.map((lawyer) => (
          <li key={lawyer._id}>
            {lawyer.SERIALNUMBER},{lawyer.BBCNUMBER},{lawyer.ADVOCATENAME},
            {lawyer.FATHERNAME},{lawyer.ADDRESS},{lawyer.JOININGDATE},
            {lawyer.ENROLLMENTDATE},{lawyer.REMARK},
            <button onClick={() => deleteLawyer(lawyer._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LawyerComponent;
