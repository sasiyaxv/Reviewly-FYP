import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useAuth0 } from "@auth0/auth0-react";

export default function Homepage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <Header />

      <div>
        <section class="m-40 ">
          <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            Analyze Product Reviews <br />
            <span class="text-blue-600">for Better Purchases</span>
          </h1>

          <button
            onClick={() => loginWithRedirect()}
            class="inline-block px-6 py-3 mr-3 bg-blue-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg "
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Get Started
          </button>
        </section>
      </div>

      <Footer />
    </div>
  );
}
