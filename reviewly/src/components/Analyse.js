import React, { useState, useRef, useEffect } from "react";

import Header from "./Header";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase-config";
import Footer from "./Footer";
import ResultBox from "./ResultBox";
import { sayHello, convertToSinhala, isSinhala } from "../ApiCalls";

export default function Analyse() {
  const [link, setLink] = useState("");
  const [components, setComponents] = useState([]);

  const [transliterated, setTransliterated] = useState("");
  const [translated, setTranslated] = useState("");
  const [analysed, setAnalysed] = useState("");

  const [sinhala, SetSinhala] = useState("");
  const [englishConverted, setEnglishConverted] = useState("");

  const [fileContent, setFileContent] = useState([]);

  const [arrayOfReviews, setarrayOfReviews] = useState([]);

  useEffect(() => {
    console.log(components);
  }, [components]);

  function handleClick() {
    if (link === "") {
      console.log("Review empty.");
    } else {
      console.log("Text" + link);

      // fetch("http://localhost:3001/isSinhala", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     str: link,
      //   }),
      // })
      //   .then((response) => response.json())
      //   .then((response) => console.log(response.result))
      //   .then((response) => SetSinhala(response.result))
      //   .catch((error) => console.error(error));

      fetch("http://localhost:3001/toEnglish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          str: link,
        }),
      })
        .then((response) => response.json())
        .then((response) => console.log(response.result))
        .then((response) => setEnglishConverted(response.result))
        .catch((error) => console.error(error));

      console.log("English " + englishConverted);

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

  function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const fileContent = event.target.result;
      console.log("sasas" + fileContent);

      const array = fileContent.split(",");
      setFileContent(array);
    };
    reader.readAsText(file);
  }

  const openFileExplorer = () => {
    inputFileRef.current.click();
  };

  return (
    <div>
      <Header />
      <div>
        <div className="bg-white rounded shadow-lg p-8 ml-5 mr-5  md:max-w-screen md:mx-auto">
          <label htmlFor="link" className="block text-xs mb-1">
            paste here :
          </label>

          <textarea
            id="review"
            onChange={(e) => setLink(e.target.value)}
            value={link}
            rows="5"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Review"
          ></textarea>

          {/* <p className="invisible peer-invalid:visible text-red-700 font-light">
            Please enter a valid email address
          </p> */}

          <button
            id="analyseBtn"
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
            onChange={handleFileSelect}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="flex-container">
        {components.map((c) => (
          <div key={c.id}>{c.component}</div>
        ))}
      </div>
      {/* <div className="flex-container">
        {components.map((c) => (
          <ResultBox key={c.id} review={c.link} onDelete={handleDelete} />
        ))}
      </div> */}
      <Footer />
    </div>
  );
}
