import React, { useEffect, useState } from "react";

export default function TableData() {
  const apiFetch = "https://jsonplaceholder.typicode.com/todos";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiFetch)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-5 bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          Todo List 
        </h2>

        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">S.No</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map( item => (
              <tr className="border-t border-gray-300 hover:bg-gray-100 transition">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.title}</td>
                <td className={`py-2 px-4 font-semibold ${
                    item.completed ? "text-green-600" : "text-red-600"
                  }`}>
                  {item.completed ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
