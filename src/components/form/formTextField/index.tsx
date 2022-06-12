import { Box, FormControl, FormLabel, TextField } from "@mui/material";
import React from "react";

type Props = {
  placeholder?: string;
  label?: string;
};

const FormTextField = ({ label, placeholder }: Props) => {
  return (
    <FormControl className="flex flex-row items-center gap-4">
      <FormLabel>{label}</FormLabel>
      <TextField placeholder={placeholder} />
    </FormControl>
  );
};

FormTextField.defaultProps = {
  label: "",
  placeholder: "",
};

export { FormTextField };
