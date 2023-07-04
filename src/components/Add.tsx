import React, { useState } from "react";
import { useAppDispatch } from "../store/store";
import { addPerson } from "../store/features/personSlice";

const Add = () => {
  const dispatch = useAppDispatch();
  const [person, setPerson] = useState({
    name: "",
    email: "",
  });

  const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, name: e.target.value });
  };

  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, email: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPerson({ ...person }));
    setPerson({ name: "", email: "" });
  };

  return (
    <form
      className="rounded-md p-2 shadow-md m-2 bg-gray-700"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Name"
            required
            onChange={(e) => handleOnChangeName(e)}
            value={person.name}
          />
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Email"
            required
            onChange={(e) => handleOnChangeEmail(e)}
            value={person.email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </div>
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Terms of Service"
          >
            terms and conditions
          </a>
          .
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add
      </button>
    </form>
  );
};

export default Add;
