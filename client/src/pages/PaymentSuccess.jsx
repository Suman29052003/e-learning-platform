import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PaymentSuccess = ({ courseTitle, courseImage }) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/"); // Redirects to the courses page or dashboard
  };

  return (
    <div className="payment-success w-full min-h-[100vh] flex flex-col items-center justify-center bg-[#f9f9f9] py-12 px-4">
      <div className="container w-[90%] md:w-[60%] lg:w-[50%] bg-white p-8 rounded-lg shadow-lg text-center">
        <CheckCircleIcon sx={{ fontSize: 80, color: "#4CAF50" }} />
        <h1 className="text-3xl md:text-4xl font-semibold text-[#002761] mt-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Congratulations! You have successfully enrolled in:
        </p>
        <h2 className="text-2xl md:text-3xl font-medium text-[#002761] mt-2">
          {courseTitle || "Your Course"}
        </h2>
        {courseImage && (
          <img
            src={courseImage}
            alt={courseTitle}
            className="w-full mt-4 rounded-lg shadow-sm"
          />
        )}
        <p className="text-md text-gray-600 mt-4">
          Get ready to dive into your course and start learning!
        </p>
        <Button
          variant="contained"
          className="bg-[#002761] mt-6"
          onClick={handleContinue}
        >
          Go to My Courses
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
