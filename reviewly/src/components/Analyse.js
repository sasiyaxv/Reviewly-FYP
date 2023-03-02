import React, { useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";



export default function Analyse() {
  const [link, setLink] = useState("");

  function getReviews() {
    alert(link);
  }
  return (
    <div>
      <div>
        <input
          className="w-full border rounded p-2 outline-none focus:shadow-outline"
          onChange={(e) => setLink(e.target.value)}
          type="text"
          value={link}
          placeholder="Paste here"
        />
        <button
          onClick={getReviews}
          className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
        >
          Analyse
        </button>
      </div>
    </div>
  );
}
