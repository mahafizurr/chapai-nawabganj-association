"use client";
// LawyerDetails.js
import React, { useState, useEffect } from "react";

const LawyerDetails = ({ params }) => {
  const [lawyer, setLawyer] = useState({});
  const [loading, setLoading] = useState(true);
  const apiUrl = `http://localhost:8000/lawyers/${params}`;

  useEffect(() => {
    fetchLawyer();
  }, [params]);

  const fetchLawyer = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setLawyer(data);
      } else {
        throw new Error(`Error fetching lawyer: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
      // You might want to redirect the user to an error page or show a friendly error message.
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col p-4 max-w-md mx-auto bg-white shadow-md">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="border-b border-gray-300 py-2">
            <span className="font-bold">Serial No: {lawyer?.SERIALNUMBER}</span>
          </p>
          <p className="border-b border-gray-300 py-2">
            <span className="font-bold">BBC Sanad No: {lawyer?.BBCNUMBER}</span>
          </p>
          <img
            src={lawyer?.imageSrc || "./images/default-image.jpg"}
            alt="Profile Image"
            className="w-80 h-80 object-cover m-4"
          />
          <div>{/* Other details */}</div>
        </>
      )}
    </div>
  );
};

export default LawyerDetails;
