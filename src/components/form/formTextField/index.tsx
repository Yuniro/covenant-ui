import {
  Box,
  FormControl,
  FormLabel,
  TextField,
  StyledEngineProvider,
} from "@mui/material";
import React from "react";

type Props = {
  placeholder?: string;
  label?: string;
};

const FormTextField = ({ label, placeholder }: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <FormControl className="flex flex-row items-center gap-4">
        <FormLabel className="basis-3/12">{label}</FormLabel>
        <TextField className="basis-9/12" placeholder={placeholder} />
      </FormControl>
    </StyledEngineProvider>
  );
};

FormTextField.defaultProps = {
  label: "",
  placeholder: "",
};

export { FormTextField };
