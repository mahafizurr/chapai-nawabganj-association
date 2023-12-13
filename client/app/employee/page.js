import React from "react";
import Employee from "../components/Employee";

function page() {
  return (
    <div>
      <div>
        <h1 className="bg-slate-800 text-3xl p-8 font-bold text-center text-white">
          Employee
        </h1>
      </div>
      <br />
      <Employee />
      <br />
    </div>
  );
}

export default page;
