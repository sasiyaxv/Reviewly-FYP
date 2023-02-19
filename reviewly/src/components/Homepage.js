import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Homepage() {
  return (
    <div>
      <Header />
      <div>
        <Link to={`/register`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Register
          </button>
        </Link>
        <Link to={`/login`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Login
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
