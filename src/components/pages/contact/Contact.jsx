import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <h2 className="text-9xl text-Gray1">Error 404: Not Found</h2>
        <button onClick={goBack}>Go Home</button>
      </div>
    </div>
  );
};

export default Contact;
