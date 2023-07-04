import React from "react";
import { useAppSelector } from "../store/store";

const List = () => {
  const person = useAppSelector((state) => state.person.persons);
  return (
    <div className="relative overflow-x-auto p-2 shadow-md">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {person.map((p) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={p.id}
            >
              <td className="px-6 py-4">{p.id}</td>
              <td className="px-6 py-4">{p.name}</td>
              <td className="px-6 py-4">{p.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
