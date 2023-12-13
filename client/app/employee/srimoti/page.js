// page.js
import React from "react";

function Page() {
  return (
    <div className="flex justify-center m-8 p-4 ">
      <div className=" m-8">
        <p className="text-2xl font-bold mb-2 ">SRIMOTI MINOTI RANI </p>

        <img
          src="../stafs/13. Shreemoti Minoti Rani.jpg"
          alt="Profile Image"
          className=" w-80 h-80 rounded-md  m-4"
        />
      </div>

      <div className="flex flex-col justify-center align-middle text-lg">
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Name:</span> SRIMOTI MINOTI RANI
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Designation:</span> Sweeper
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Father's Name:</span> SHREE BABU SARKER
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Mobile:</span> 01762483716
        </p>

        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Address:</span> Lakherajpara,
          Chapainawabganj Sadar, Chapainawabganj
        </p>
      </div>
    </div>
  );
}

export default Page;
