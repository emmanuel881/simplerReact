import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
        sapiente.
      </p>
      <p>
        Go back to <Link to="/">HomePage</Link>
      </p>
    </div>
  );
}
