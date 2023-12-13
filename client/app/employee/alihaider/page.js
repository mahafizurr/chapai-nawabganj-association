// page.js
import React from "react";

function Page() {
  return (
    <div className="flex justify-center m-8 p-4 ">
      <div className=" m-8">
        <p className="text-2xl font-bold mb-2 ">ALI HAIDAR </p>

        <img
          src="../stafs/01. Ali Hadiar.jpg"
          alt="Profile Image"
          className=" w-80 h-80 rounded-md  m-4"
        />
      </div>

      <div className="flex flex-col justify-center align-middle text-lg">
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Name:</span> ALI HAIDAR
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Designation:</span> Accountant
          Cum-Computer Operator
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Father's Name:</span> ABDUL HOQUE
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Mobile:</span> 01711202824
        </p>

        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Address:</span> Baliaghatta,
          Chowhodditola, Godagari, Rajshahi
        </p>
      </div>
    </div>
  );
}

export default Page;
