import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormDialog from "../components/FormDialog";
import Home from "./Home";
import axios from 'axios'
import { useToast } from "../context/ToastProvider";


const Login = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Open the dialog when the component mounts
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    navigate("/"); // Redirect to home or another page after closing the dialog
  };

  const { showToast } = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    const password = formJson.password;

    try {
      const response = await axios.post("http://localhost:3000/api/user/login", {
        email,
        password,
      });
      console.log(response.data); // Handle successful response
      const token = response.data.token
      localStorage.setItem('token', token); // Store token
      if(token){
        showToast(response.data.message)
        window.location.reload()
      }
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
      title="Welcome Back"
      submitLabel="Log In"
      fields={[
        { id: "email", label: "Email Address", type: "email", required: true },
        { id: "password", label: "Password", type: "password", required: true },
      ]}
      handleSubmit={handleSubmit}
      footerLink={{
        label: "New to EduQuest? Sign Up",
        onClick: () => navigate("/signup"), // Navigate to signup route
      }}
    />
    </>
  );
};

export default Login;
