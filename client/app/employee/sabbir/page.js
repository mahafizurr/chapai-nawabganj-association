// page.js
import React from "react";

function Page() {
  return (
    <div className="flex justify-center m-8 p-4 ">
      <div className=" m-8">
        <p className="text-2xl font-bold mb-2 ">MD. SABBIR HOSSAIN (EMON)</p>

        <img
          src="../stafs/10. MD. SABBIR HOSSAIN (EMON).jpg"
          alt="Profile Image"
          className=" w-80 h-80 rounded-md  m-4"
        />
      </div>

      <div className="flex flex-col justify-center align-middle text-lg">
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Name:</span> MD. SABBIR HOSSAIN (EMON)
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Designation:</span> Mlss
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Father's Name:</span> LATE FOZLUR RAHMAN
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Mobile:</span> 01758203372
        </p>

        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Address:</span> Arambag, Bottolahat,
          Chapainawabganj Sadar, Chapainawabganj
        </p>
      </div>
    </div>
  );
}

export default Page;
