import React from "react";

function NoticeBoard() {
  return (
    <div className="text-center">
      <h1 className="bg-slate-800 text-4xl p-8 font-bold text-white">
        Notice Board
      </h1>

      <div className="flex justify-center">
        <div className="flex flex-col  items-end ">
          <h2 className="text-2xl text-green-800 font-bold p-4">
            Bar Council-2024 & Chapai Bar-2023 Chada Notice
          </h2>

          <div className="flex flex-col justify-end max-w-md mb-8">
            <img
              src="./no.jpeg"
              alt="Notice Image"
              className="w-80 h-80 object-cover rounded"
            />

            <div className="mt-4 bg-green-800">
              <a
                href="#"
                className="text-white hover:underline"
                download="notice"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeBoard;
