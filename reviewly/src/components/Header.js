import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="relative container mx-auto p-6">
        <flex className="flex item-center justify-between">
          <div className="pt-2">
            <a href="/">
              <h1 className="text-4xl font-extrabold dark:text-black">
                Reviewly
              </h1>
            </a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="analyse" className="hover:text-gray-400">
              Analyze
            </a>
            {/* <a href="previous" className="hover:text-gray-400">
              Previous Reults
            </a> */}
            <a href="contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
          <a
            href="register"
            className="hidden md:block p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-red-800"
          >
            Signup
          </a>
        </flex>
      </nav>
    </div>
  );
}
