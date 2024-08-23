import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormDialog from "../components/FormDialog";
import Home from "./Home";
import axios from 'axios'
import { useToast } from "../context/ToastProvider";


const Signup = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    // Open the dialog when the component mounts
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    navigate("/"); // Redirect to home or another page after closing the dialog
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const fullName = formJson.fullName;
    const email = formJson.email;
    const password = formJson.password;

    try {
      const response = await axios.post("http://localhost:3000/api/user/signup", {
        fullName,
        email,
        password,
      });
      console.log(response.data);   // Handle successful response
      navigate('/login') 
      showToast(response.data.message)
      handleClose();
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <>
    <Home/>
    <FormDialog
      open={open}
      setOpen={setOpen}
      title="Sign Up"
      submitLabel="Sign Up"
      fields={[
        { id: "fullName", label: "Full Name", type: "text", required: true },
        { id: "email", label: "Email Address", type: "email", required: true },
        { id: "password", label: "Password", type: "password", required: true },
      ]}
      handleSubmit={handleSubmit}
      footerLink={{
        label: "Already have an account? Sign In",
        onClick: () => navigate("/login"), // Navigate to login route
      }}
    />
</>
  );
};

export default Signup;
