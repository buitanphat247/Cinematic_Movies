import React from "react";
import Button from "../Components/Button";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-700">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-4">Oops! Page not found.</h2>
        <h1 className="text-[80px] font-bold text-red-500 mb-4 ">404</h1>
        <p className="text-lg text-gray-700 mb-4">
          We can't find the page you're looking for.
        </p>
        <Button>
          <a
            href="/"
            className="text-xl p-2 rounded-md  bg-[#292f3b] text-white hover:underline"
          >
            Go back home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Error;
