import React, { useState } from "react";
import Header from "./Header";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginClicked() {}
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <Header />
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Login
          </span>
          <form className="mb-4" action="/" method="post">
            <div className="mb-4 md:w-full">
              <label for="email" className="block text-xs mb-1">
                Username or Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                placeholder="E-mail"
              />
            </div>
            <div className="mb-6 md:w-full">
              <label for="password" className="block text-xs mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <button
              onClick={() => loginWithRedirect()}
              className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
            >
              Login
            </button>
          </form>
          <a className="text-blue-700 text-center text-sm" href="/login">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}
