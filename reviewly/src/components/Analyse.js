import React, { useState, useRef } from "react";

import Header from "./Header";
import Footer from "./Footer";
import {
  convertToSinhala,
  isSinhala,
  textBlob,
  translateToEnglish,
  bertAnalyze,
  dataPreprocess,
  lstmAnalyze,
} from "../ApiCalls";

import LoadingScreen from "./LoadingScreen";

export default function Analyse() {
  const [link, setLink] = useState("");

  const [readFile, setReadFile] = useState([]);

  const [arrayOfReviews, setarrayOfReviews] = useState({});

  const [isLoad, setLoading] = useState(false);

  const getInitialState = () => {
    const value = "LSTM";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  async function sendArrayToApi(myArray) {
    for (let i = 0; i < myArray.length; i++) {
      setLoading(true);

      // const element = myArray[i]
      const transliteratedTxt = await convertToSinhala(myArray[i]);

      const translatedTxt = await translateToEnglish(transliteratedTxt);

      const sentiment = await textBlob(translatedTxt);

      setLoading(false);

      const newPair = { [myArray[i]]: sentiment };

      setarrayOfReviews((prevState) => ({ ...prevState, ...newPair }));
    }
  }

  // Analyze using textblob
  async function textBlobAnalyze() {
    setLoading(true);

    const allSinhala = await isSinhala(link);

    if (allSinhala === "True") {
      const translatedTxt = await translateToEnglish(link);
      const sentiment = await textBlob(translatedTxt);
      const newPair = { [link]: sentiment };

      setarrayOfReviews((prevState) => ({ ...prevState, ...newPair }));
    }
    const transliteratedTxt = await convertToSinhala(link);

    const translatedTxt = await translateToEnglish(transliteratedTxt);

    const sentiment = await textBlob(translatedTxt);

    setLoading(false);

    const newPair = { [link]: sentiment };

    setarrayOfReviews((prevState) => ({ ...prevState, ...newPair }));
  }

  async function bertSelected() {
    setLoading(true);
    const allSinhala = await isSinhala(link);
    if (allSinhala === "True") {
      const translatedTxt = await translateToEnglish(link);
      const preprocessedTxt = await dataPreprocess(translatedTxt);
      const sentiment = await bertAnalyze(preprocessedTxt);
      const newPair = { [link]: sentiment };
      setarrayOfReviews((prevState) => ({ ...prevState, ...newPair }));
    }
    const transliteratedTxt = await convertToSinhala(link);
    const translatedTxt = await translateToEnglish(transliteratedTxt);
    const preprocessedTxt = await dataPreprocess(translatedTxt);
    const sentiment = await bertAnalyze(preprocessedTxt);
    setLoading(false);
    const newPair = { [link]: sentiment };
    setarrayOfReviews((prevState) => ({ ...prevState, ...newPair }));
  }

  async function lstmSelected() {
    setLoading(true);
    const allSinhala = await isSinhala(link);
    if (allSinhala === "True") {
      const translatedTxt = await translateToEnglish(link);
      const preprocessedTxt = await dataPreprocess(translatedTxt);
      const sentiment = await lstmAnalyze(preprocessedTxt);
      const newPair = { [link]: sentiment };
      setarrayOfReviews((prevState) => ({ ...prevState, ...newPair }));
    }
    const transliteratedTxt = await convertToSinhala(link);
    const translatedTxt = await translateToEnglish(transliteratedTxt);
    const preprocessedTxt = await dataPreprocess(translatedTxt);
    const sentiment = await lstmAnalyze(preprocessedTxt);
    setLoading(false);
    const newPair = { [link]: sentiment };
    setarrayOfReviews((prevState) => ({ ...prevState, ...newPair }));
  }

  function handleClick() {
    if (link === "" && readFile.length === 0) {
      console.log("Review empty.");
      alert("Please Enter a Valid Review");
    } else if (link === "") {
      sendArrayToApi(readFile);
    } else if (value === "textblob") {
      textBlobAnalyze();
    } else if (value === "bert") {
      bertSelected();
    } else if (value === "LSTM") {
      lstmSelected();
    }
  }

  // download results button functionality
  function downloadResults() {
    if (Object.keys(arrayOfReviews).length === 0) {
      alert("Nothing to download");
    } else {
      const element = document.createElement("a");
      const file = new Blob([JSON.stringify(arrayOfReviews)], {
        type: "text/plain",
      });
      element.href = URL.createObjectURL(file);
      element.download = "results.txt";
      document.body.appendChild(element);
      element.click();
    }
  }

  const inputFileRef = useRef(null);

  // File upload function
  function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const file = event.target.result;

      const array2 = file.split(",");
      setReadFile(array2);
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
              <option value="bert">BERT</option>
            </select>
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
      <div className="bg-grey rounded shadow-lg p-8 ml-5 mr-5  md:max-w-screen md:mx-auto">
        <ul>
          {Object.keys(arrayOfReviews).map((key) => (
            <li key={key}>
              {key}: {arrayOfReviews[key]}
            </li>
          ))}
        </ul>
        {isLoad && <LoadingScreen />}
      </div>
      <Footer />
    </div>
  );
}
