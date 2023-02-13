import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginClicked() {}

  return (
    <div>
      <h2>Login</h2>
      <div>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="E-mail"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div>
          <button onClick={loginClicked} type="submit">
            Login
          </button>
        </div>
        <div>
          <Link to={`/register`}>
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
