import {
  Box,
  FormControl,
  FormLabel,
  TextareaAutosize,
  TextareaAutosizeProps,
} from "@mui/material";
import React from "react";

type Props = {
  placeholder?: string;
  label?: string;
  textAreaProps?: TextareaAutosizeProps;
};

const FormTextArea = ({ label, placeholder, textAreaProps }: Props) => {
  return (
    <FormControl className="flex flex-row items-center gap-4">
      <FormLabel>{label}</FormLabel>
      <TextareaAutosize
        placeholder={placeholder}
        minRows={3}
        {...textAreaProps}
      />
    </FormControl>
  );
};

FormTextArea.defaultProps = {
  label: "",
  placeholder: "",
  textAreaProps: {
    minRows: 3,
  },
};

export { FormTextArea };
