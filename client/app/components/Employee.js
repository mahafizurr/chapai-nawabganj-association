import React from "react";
import Link from "next/link";

function Employee() {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <table className=" text-center w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">S.N</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Desination</th>
            <th className="border p-2">Mobile</th>
            <th className="border p-2">Photo</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="border p-2">1 </td>
            <td className="border p-2">
              <Link href="./employee/alihaider"> ALI HAIDAR</Link>{" "}
            </td>
            <td className="border p-2">Accountant Cum-Computer Operator</td>
            <td className="border p-2">01711202824</td>
            <td className="border p-2">
              <img src="../stafs/01. Ali Hadiar.jpg" className="w-20 h-20 " />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border p-2">2 </td>
            <td className="border p-2">
              <Link href="./employee/momin"> MD. ABDUL MOMIN </Link>{" "}
            </td>
            <td className="border p-2">Office Asistant</td>
            <td className="border p-2">01727250117</td>
            <td className="border p-2">
              <img src="../stafs/02. Abdul Momin.jpg" className="w-20 h-20 " />
            </td>
          </tr>

          <tr className="bg-gray-100">
            <td className="border p-2">3 </td>
            <td className="border p-2">
              <Link href="./employee/kasem">MOHD ABUL KASHEM</Link>{" "}
            </td>
            <td className="border p-2">Librarian </td>
            <td className="border p-2">01747257460</td>
            <td className="border p-2">
              <img
                src="../stafs/03 copy. Abul Qasem.jpg"
                className="w-20 h-20 "
              />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border p-2">4 </td>
            <td className="border p-2">
              <Link href="./employee/babu"> MD. ATAUR RAHMAN (BABU) </Link>{" "}
            </td>
            <td className="border p-2">Mlss</td>
            <td className="border p-2">01712362386</td>
            <td className="border p-2">
              <img
                src="../stafs/04. Ataur Rahman Babu.jpg"
                className="w-20 h-20 "
              />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border p-2">5 </td>
            <td className="border p-2">
              <Link href="./employee/samad"> MD. ABDUS SAMAD </Link>{" "}
            </td>
            <td className="border p-2">Mlss</td>
            <td className="border p-2">01732826938</td>
            <td className="border p-2">
              <img src="../stafs/05. Abdus Samad.jpg" className="w-20 h-20 " />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border p-2">6</td>
            <td className="border p-2">
              <Link href="./employee/milon"> MD. MILON </Link>{" "}
            </td>
            <td className="border p-2">Mlss</td>
            <td className="border p-2">01721335615</td>
            <td className="border p-2">
              <img src="../stafs/06. Milon Ali.jpg" className="w-20 h-20 " />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border p-2">7 </td>
            <td className="border p-2">
              <Link href="./employee/badol">MD. BADOL </Link>{" "}
            </td>
            <td className="border p-2">Mlss</td>
            <td className="border p-2">01723498044</td>
            <td className="border p-2">
              <img src="../stafs/07. Badol Ali.jpg" className="w-20 h-20 " />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border p-2">8</td>
            <td className="border p-2">
              <Link href="./employee/nurul">MD. NURUL ISLAM SAHIN </Link>{" "}
            </td>
            <td className="border p-2">Mlss</td>
            <td className="border p-2">01740586550</td>
            <td className="border p-2">
              <img src="../stafs/08. Shahin Ali.jpg" className="w-20 h-20 " />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border p-2">9 </td>
            <td className="border p-2">
              <Link href="./employee/sagor"> MD. SAGOR </Link>{" "}
            </td>
            <td className="border p-2">Mlss</td>
            <td className="border p-2">01722905970</td>
            <td className="border p-2">
              <img src="../stafs/09. Sagor Ali.jpg" className="w-20 h-20 " />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border p-2">10 </td>
            <td className="border p-2">
              <Link href="./employee/sabbir"> MD. SABBIR HOSSAIN (EMON) </Link>{" "}
            </td>
            <td className="border p-2">Mlss</td>
            <td className="border p-2">01758203372</td>
            <td className="border p-2">
              <img
                src="../stafs/10. MD. SABBIR HOSSAIN (EMON).jpg"
                className="w-20 h-20 "
              />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border p-2">11 </td>
            <td className="border p-2">
              <Link href="./employee/toymur"> MD. TOYMUR RAHMAN </Link>{" "}
            </td>
            <td className="border p-2">Night Gard</td>
            <td className="border p-2">01745564416</td>
            <td className="border p-2">
              <img
                src="../stafs/11. Toymur Rahman.jpg"
                className="w-20 h-20 "
              />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border p-2">12</td>
            <td className="border p-2">
              <Link href="./employee/palash"> SREE POLASH JAMADER </Link>{" "}
            </td>
            <td className="border p-2">Sweeper</td>
            <td className="border p-2">01710139979</td>
            <td className="border p-2">
              <img
                src="../stafs/12. Shree Polash Jemeder.jpg"
                className="w-20 h-20 "
              />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border p-2">13 </td>
            <td className="border p-2">
              <Link href="./employee/srimoti"> SRIMOTI MINOTI RANI </Link>{" "}
            </td>
            <td className="border p-2">Sweeper</td>
            <td className="border p-2">01762483716</td>
            <td className="border p-2">
              <img
                src="../stafs/13. Shreemoti Minoti Rani.jpg"
                className="w-20 h-20 "
              />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border p-2">14 </td>
            <td className="border p-2">
              <Link href="./employee/sridoy"> SHREE SRIDOY SAHA </Link>{" "}
            </td>
            <td className="border p-2">Sweeper</td>
            <td className="border p-2">01709505834</td>
            <td className="border p-2">
              <img src="../stafs/14. RIDOY SHAHA.jpg" className="w-20 h-20 " />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
