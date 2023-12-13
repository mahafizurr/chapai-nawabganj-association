"use client";

import React, { useState } from "react";

function NoticeComponent() {
  const [file, setFile] = useState();
  const [view, setView] = useState();

  const SunmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/noticeupload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={SunmitHandler}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button>upload</button>
      </form>
    </div>
  );
}

export default NoticeComponent;
