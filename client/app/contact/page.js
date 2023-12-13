import React from "react";
import {
  AiOutlineEnvironment,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

const contactMethods = [
  {
    icon: <AiOutlinePhone style={{ width: 60, height: 60, color: "orange" }} />,
    title: "Call Us",
    details: "Phone : +880258893306",
  },
  {
    icon: <AiOutlineMail style={{ width: 60, height: 60, color: "orange" }} />,
    title: "Email Us",
    details: "Email : advbarcnj@gmail.com",
  },
  {
    icon: (
      <AiOutlineEnvironment
        style={{ width: 60, height: 60, color: "orange" }}
      />
    ),
    title: "Address",
    details: [
      "Post Code - 6300, Thana: Chapainawabganj Sadar",
      "Chapainawabganj Court, Chapainawabganj",
    ],
  },
];

export default function Page() {
  return (
    <div>
      <h1 className="bg-slate-800 text-4xl p-8 font-bold text-center text-white">
        Contact
      </h1>

      <div className="grid align-center grid-cols-1 md:grid-cols-3 gap-4 my-20">
        {contactMethods.map((method, index) => (
          <div key={index} className="p-4 bg-white rounded-md shadow-md">
            <div className="flex flex-col items-center mb-4">
              <div className="mr-4">{method.icon}</div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">{method.title}</h1>
                {typeof method.details === "string" ? (
                  <p className="text-lg">{method.details}</p>
                ) : (
                  method.details.map((line, idx) => <p key={idx}>{line}</p>)
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
