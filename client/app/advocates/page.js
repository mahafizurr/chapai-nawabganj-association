"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [lawyers, setLawyers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const apiUrl = "http://localhost:8000/lawyers";

  useEffect(() => {
    fetchLawyers();
  }, []);

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

  const handleLawyerClick = (id) => {
    router.push(`/advocates/${id}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredLawyers = lawyers.filter((lawyer) =>
    lawyer.ADVOCATENAME.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="bg-slate-800 text-3xl p-8 font-bold text-center text-white">
        Member Directory
      </h1>

      <div className="flex items-center space-x-4 mt-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded w-full"
          placeholder="Search"
        />
      </div>

      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className=" px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
            >
              Serial No:
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
            >
              BBC Sanad No :
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
            >
              Advocate Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
            >
              Phone Number
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
            >
              Photo
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
            >
              Remark
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredLawyers.map((lawyer) => (
            <tr
              key={lawyer._id}
              onClick={() => handleLawyerClick(lawyer._id)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="text-lg px-6 py-4 whitespace-nowrap">
                {lawyer.SERIALNUMBER}
              </td>
              <td className="text-lg px-6 py-4 whitespace-nowrap">
                {lawyer.BBCNUMBER}
              </td>

              <td className="text-lg px-6 py-4 whitespace-nowrap">
                {lawyer.ADVOCATENAME}
              </td>
              <td className="text-lg px-6 py-4 whitespace-nowrap">
                {lawyer.PHONENUMBER}
              </td>

              <td className="text-lg px-6 py-4 whitespace-nowrap">
                <img
                  src={`/uploads/${lawyer.PHOTO}`}
                  alt="User's Photo"
                  className="mx-auto w-20 h-20 rounded-xl mb-4"
                />
              </td>
              <td className="text-lg px-6 py-4 whitespace-nowrap">
                {lawyer.REMARK}
              </td>
              {/* ... other table data ... */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
