import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "../context/ToastProvider";

const EnrollButton = ({ course, cards }) => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        showToast("Log in to Proceed");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        return;
      }

      const { data: order } = await axios.post(
        "http://localhost:3000/api/purchase-course",
        {
          amount: course.price, // Course price is passed in rupees
          currency: "INR",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const options = {
        key: "rzp_test_BX3KQ7tc1uJhLX",
        amount: order.amount,
        currency: order.currency,
        name: course.title,
        description: "Course Enrollment",
        image: course.image,
        order_id: order.id,
        handler: function (response) {
          showToast("Payment Successful");
          navigate("/payment-success");
        },
        prefill: {
          name: "Your Name",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#002761",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(
        "Error during payment:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Button
      variant="contained"
      startIcon={<ShoppingCartIcon />}
      className="bg-[#002761] m-8"
      onClick={handlePayment}
    >
      {cards ? "Enroll Now" : `Enroll Now - ₹ ${course.price}`}
    </Button>
  );
};

export default EnrollButton;
