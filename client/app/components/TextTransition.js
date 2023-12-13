import React from "react";
import "../TextTransition.css"; // Import the CSS file for styling
import Link from "next/link";

const TextTransition = () => {
  return (
    <div className="   p-2 font-bold text-center ">
      <p className="flashing-text text-md  font-bold text-center p-2 ">
        {" "}
        <Link href="/notice">
          Bar Council-2024 & Chapai Bar-2023 Chada Notice
        </Link>
      </p>
    </div>
  );
};

export default TextTransition;
