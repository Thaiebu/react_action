import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>This is home Page</h1>

      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/listing">Listing</Link>
    </>
  );
}
