import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FaFaceFrown } from "react-icons/fa6";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const returh = () => {
    navigate("/");
  };

  return (
    <div>
      <FaFaceFrown className=" text-8xl mx-auto my-24 text-center text-red-600 animate-pulse" />
      <h1 className="text-center text-primary1 text-5xl font-bold animate-bounce">
        404
      </h1>
      <p className="text-center text-xl mb-12 text-primary1">Page not found</p>
      <p
        onClick={returh}
        className="text-center text-xl mb-12 text-secondary2 cursor-pointer"
      >
        Return
      </p>
    </div>
  );
};

export default NotFoundPage;
