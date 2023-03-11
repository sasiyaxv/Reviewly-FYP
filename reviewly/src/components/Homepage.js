import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Homepage() {
  return (
    <div>
      <Header />

      <div>
        <section class="m-40 ">
          <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            Analyze Product Reviews <br />
            <span class="text-blue-600">for Better Purchases</span>
          </h1>
          <Link to={`/register`}>
            <button
              class="inline-block px-6 py-3 mr-3 bg-blue-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg "
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Get Started
            </button>
          </Link>
          <Link to={`/login`}>
            <button
              class="inline-block px-7 py-3 bg-transparent text-blue-700 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Login
            </button>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
}
