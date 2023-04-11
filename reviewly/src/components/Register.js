import React, { useState } from "react";
import Header from "./Header";

export default function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [users, setUsers] = useState([]);

  return (
    <div>
      <Header />
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Register
          </span>
          <form className="mb-4" action="/" method="post">
            <div className="mb-4 md:w-full">
              <label for="email" className="block text-xs mb-1">
                First Name
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                onChange={(e) => setFname(e.target.value)}
                type="text"
                value={fname}
                placeholder="First Name"
              />
            </div>
            <div className="mb-4 md:w-full">
              <label for="email" className="block text-xs mb-1">
                Last Name
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                onChange={(e) => setLname(e.target.value)}
                type="text"
                value={lname}
                placeholder="Last Name"
              />
            </div>
            <label for="email" className="block text-xs mb-1">
              Email
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="E-mail"
            />
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
            <div className="mb-6 md:w-full">
              <label for="password" className="block text-xs mb-1">
                Confirm Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
              />
            </div>
            <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
              SignUp
            </button>

            {users.map((user) => {
              return (
                <div>
                  <h1>{user.name}</h1>
                  <h2>{user.email}</h2>
                </div>
              );
            })}
          </form>
        </div>
      </div>
    </div>
  );
}
