import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h2>Homepage</h2>
      <div>
        <Link to={`/register`}>
          <button>Register</button>
        </Link>
        <Link to={`/login`}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}
