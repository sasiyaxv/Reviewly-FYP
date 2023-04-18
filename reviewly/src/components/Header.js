import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { loginWithRedirect } = useAuth0();
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
            <a href="contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
          <a
            onClick={() => loginWithRedirect()}
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
