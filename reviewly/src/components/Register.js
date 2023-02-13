import React, { useState } from "react";

export default function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerClicked() {}

  return (
    <div>
      <h2>Register</h2>

      <div>
        <div>
          <label>First Name : </label>
          <input
            onChange={(e) => setFname(e.target.value)}
            type="text"
            value={fname}
            placeholder="First Name"
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input
            onChange={(e) => setLname(e.target.value)}
            type="text"
            value={lname}
            placeholder="Last Name"
          />
        </div>
        <div>
          <label>Email : </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="E-mail"
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button onClick={registerClicked}>Register</button>
      </div>
    </div>
  );
}
