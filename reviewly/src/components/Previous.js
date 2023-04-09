import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Previous() {
  const [records, setRecords] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContent = event.target.result;
      setRecords(fileContent);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <Header />
      <button onClick={handleFileChange}>Get Previous Results</button>
      {records}
      <Footer />
    </div>
  );
}
