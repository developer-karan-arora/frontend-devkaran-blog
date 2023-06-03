import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react'
function Require() {
  return (
    <div className="py-10">
        <div className="mt-64"></div>
      <div className="text-center">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Page require Login
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, You need Login to get the page you&apos;re looking for.
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link to="/">Home</Link>
          </button>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Require;
