import React from "react";
import LawyerComponent from "../components/LawyerComponent";

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-1/2 mt-4 lg:mt-0">
          <LawyerComponent />
        </div>
      </div>
    </div>
  );
}
