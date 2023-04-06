import React, { useState, useRef } from "react";

import Header from "./Header";
import Footer from "./Footer";
import {
  convertToSinhala,
  isSinhala,
  textBlob,
  translateToEnglish,
} from "../ApiCalls";

export default function Analyse() {
  const [link, setLink] = useState("");

  const [fileContent, setFileContent] = useState([]);

  const [arrayOfReviews, setarrayOfReviews] = useState({});

  const getInitialState = () => {
    const value = "LSTM Model";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  async function textBlobAnalyze() {
    if (link === "") {
      console.log("Review empty.");
      alert("Please Enter a Valid Review");
    } else {
      const allSinhala = await isSinhala(link);

      if (allSinhala == "True") {
        const translatedTxt = await translateToEnglish(link);
        const sentiment = await textBlob(translatedTxt);
        const newPair = { [link]: sentiment };

        setarrayOfReviews((prevState) => ({ ...prevState, ...newPair }));
      }
      const transliteratedTxt = await convertToSinhala(link);

      const translatedTxt = await translateToEnglish(transliteratedTxt);

      const sentiment = await textBlob(translatedTxt);

      const newPair = { [link]: sentiment };

      setarrayOfReviews((prevState) => ({ ...prevState, ...newPair }));
    }
  }

  function handleClick() {
    if (link === "") {
      console.log("Review empty.");
    } else if (value == "textblob") {
      textBlobAnalyze();
    }
  }
  function downloadResults() {}

  const inputFileRef = useRef(null);

  function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const fileContent = event.target.result;

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
          <div>
            <select
              className="w-1/2 p-2.5 mt-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              value={value}
              onChange={handleChange}
            >
              <option value="LSTM">LSTM Model</option>
              <option value="textblob">Text Blob API</option>
              {/* <option value="Cherry">Cherry</option> */}
            </select>
            <p>{`You selected ${value}`}</p>
          </div>

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

          <button
            id="downloadBtn"
            onClick={downloadResults}
            className="bg-green-500 p-2 m-4 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
          >
            Download
          </button>
        </div>
      </div>
      <ul>
        {Object.keys(arrayOfReviews).map((key) => (
          <li key={key}>
            {key}: {arrayOfReviews[key]}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}
