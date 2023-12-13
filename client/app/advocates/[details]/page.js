"use client";
import React from "react";
import LawyerDetails from "../../components/LawyerDetails";

export default function LawyerDetailsPage({ params }) {
  return (
    <div>
      <h1>Lawyer Details Page</h1>
      <LawyerDetails params={params} />
    </div>
  );
}
