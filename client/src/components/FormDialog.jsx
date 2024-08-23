import React from "react";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const FormDialog = ({
  open,
  setOpen,
  title,
  submitLabel,
  fields,
  handleSubmit,
  footerLink,
}) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    navigate('/')
  }


    

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle className="text-center">
        <span className="text-[#0056d2] text-2xl font-medium">{title}</span>
      </DialogTitle>
      <DialogContent>
        {fields.map((field) => (
          <TextField
            key={field.id}
            autoFocus={field.autoFocus}
            required={field.required}
            margin="dense"
            id={field.id}
            name={field.id}
            label={field.label}
            type={field.type}
            fullWidth
            variant="standard"
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">{submitLabel}</Button>
      </DialogActions>
      {footerLink && (
        <DialogContentText className="w-full text-center p-5">
          <span
            className="hover:underline cursor-pointer text-[#0056d2]"
            onClick={footerLink.onClick}
          >
            {footerLink.label}
          </span>
        </DialogContentText>
      )}
    </Dialog>
  );
};

export default FormDialog;
