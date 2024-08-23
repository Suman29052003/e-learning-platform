import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Home from "../pages/Home";
import { useNavigate } from "react-router-dom";

export default function FormDialog({ open, setOpen }) {
  const [signUp, setSignUp] = React.useState(false);

  const navigate = useNavigate()

  // const handleNavigate =()=>{
  // }
  
  const handleClose = () => {
    navigate('/')
    setOpen(false);
  };

  return (
    <>
    <Home />
      {signUp ? (
        // Sign Up Form
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const fullname = formJson.fullname;
              const email = formJson.email;
              const password = formJson.password;
              console.log(fullname, email, password);
              handleClose();
            },
          }}
        >
          <DialogTitle className="text-center">
            <span className="text-[#0056d2] text-2xl font-medium">Sign Up</span>
            <DialogContentText>
              <p className="w-[70%] m-auto">Learn on your own time from top universities and businesses.</p>
            </DialogContentText>
            </DialogTitle>
          <DialogContent>
            {/* Full Name */}
            <TextField
              autoFocus
              required
              margin="dense"
              id="fullname"
              name="fullname"
              label="Full Name"
              type="text"
              fullWidth
              variant="standard"
            />

            {/* Email Address */}
            <TextField
              required
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />

            {/* Password */}
            <TextField
              required
              margin="dense"
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Sign Up</Button>
          </DialogActions>
          {/* Sign In Link */}
          <DialogContentText className="w-full text-center p-5">
            <span
              className="hover:underline cursor-pointer text-[#0056d2] text-center"
              onClick={() => setSignUp(false)}
            >
              Already have an account? Sign In
            </span>
          </DialogContentText>
        </Dialog>
      ) : (
        // Log In Form
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              const password = formJson.password;
              console.log(email, password);
              handleClose();
            },
          }}
        >
          <DialogTitle className="text-center"><span className="text-[#0056d2] text-2xl font-medium">Welcome Back</span></DialogTitle>
          <DialogContent>
            {/* Email Address */}
            <TextField
              autoFocus
              required
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />

            {/* Password */}
            <TextField
              required
              margin="dense"
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Log In</Button>
          </DialogActions>
          {/* Sign Up Link */}
          <DialogContentText className="w-full text-center p-5">
            <span
              className="hover:underline cursor-pointer text-[#0056d2] text-center"
              onClick={() => setSignUp(true)}
            >
              New to EduQuest? Sign Up
            </span>
          </DialogContentText>
        </Dialog>
      )}
    </>
  );
}
