import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        Go back to <Link to="/">HomePage</Link>
      </p>
    </div>
  );
}

export default PageNotFound;
