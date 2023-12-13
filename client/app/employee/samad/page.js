// page.js
import React from "react";

function Page() {
  return (
    <div className="flex justify-center m-8 p-4 ">
      <div className=" m-8">
        <p className="text-2xl font-bold mb-2 ">MD. ABDUS SAMAD </p>

        <img
          src="../stafs/05. Abdus Samad.jpg"
          alt="Profile Image"
          className=" w-80 h-80 rounded-md  m-4"
        />
      </div>

      <div className="flex flex-col justify-center align-middle text-lg">
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Name:</span> MD. ABDUS SAMAD
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Designation:</span> Mlss
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Father's Name:</span> LATE ASKOR ALI
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Mobile:</span> 01732826938
        </p>

        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Address:</span> Debinagar, Shibganj,
          Chapainawabganj
        </p>
      </div>
    </div>
  );
}

export default Page;
