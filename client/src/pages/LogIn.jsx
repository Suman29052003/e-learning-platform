import React, { useState } from "react";
import FormDialog from "../components/FormDialog";


const LogIn = () => {
  const [open, setOpen] = useState(true);
  
  return (
    <div>
      <FormDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default LogIn;
