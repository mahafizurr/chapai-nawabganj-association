import React from "react";
import Com_2023 from "../components/comitee/Com_2023";

function page() {
  return (
    <div>
      <div>
        <h1 className="bg-slate-800 text-3xl p-8 font-bold text-center text-white">
          Executive Comuttee 2023
        </h1>
      </div>
      <br />
      <Com_2023 />
      <br />
    </div>
  );
}

export default page;
