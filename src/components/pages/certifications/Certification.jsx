import React from "react";
import { useNavigate } from "react-router-dom";

const Certification = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center  w-auto h-auto justify-center">
      <div className="flex flex-col h-full w-full mt-60 p-4 items-center justify-center">
        <h2 className="text-3xl md:text-5xl lg:text-9xl text-Gray1">
          Error 404: Not Found
        </h2>
        <button
          onClick={goBack}
          className="px-10 py-4 bg-bgFooter text-white rounded-2xl mt-16 "
        >
          Go Home <i class="bx bx-home"></i>
        </button>
      </div>
    </div>
  );
};

export default Certification;
