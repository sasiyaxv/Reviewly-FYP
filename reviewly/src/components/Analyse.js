import React, { useState, useRef } from "react";

import Header from "./Header";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase-config";
import Footer from "./Footer";
import ResultBox from "./ResultBox";
import { sayHello } from "../ApiCalls";

export default function Analyse() {
  const [link, setLink] = useState("");
  const [components, setComponents] = useState([]);

  function handleClick() {
    if (link === "") {
      console.log("Review empty.");
    } else {
      sayHello();
      const id = new Date().getTime(); // Generate a unique ID
      setComponents((components) => [
        ...components,
        {
          id: id,
          component: (
            <ResultBox id={id} review={link} onDelete={handleDelete} />
          ),
        },
      ]);
    }
  }

  function handleDelete(id) {
    setComponents((components) => components.filter((c) => c.id !== id));
  }

  const inputFileRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log(event.target.result);
      // Do something with the file content, such as display it in the UI
      alert(event.target.result);
    };
    reader.readAsText(file);
  };

  const openFileExplorer = () => {
    inputFileRef.current.click();
  };

  return (
    <div>
      <Header />
      <div>
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <label htmlFor="link" className="block text-xs mb-1">
            paste here :
          </label>

          <textarea
            id="review"
            onChange={(e) => setLink(e.target.value)}
            value={link}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Review"
          ></textarea>
          <p className="invisible peer-invalid:visible text-red-700 font-light">
            Please enter a valid email address
          </p>

          <button
            onClick={handleClick}
            className="bg-green-500 p-2 m-4 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
          >
            Analyse
          </button>

          <button
            onClick={openFileExplorer}
            className="bg-green-500 p-2 m-4 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
          >
            Upload
          </button>
          <input
            type="file"
            ref={inputFileRef}
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="flex-container">
        {components.map((c) => (
          <div key={c.id}>{c.component}</div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
