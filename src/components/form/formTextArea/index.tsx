import {
  Box,
  FormControl,
  FormLabel,
  StyledEngineProvider,
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
    <StyledEngineProvider injectFirst>
      <FormControl className="flex flex-row items-center gap-4">
        <FormLabel className="basis-3/12">{label}</FormLabel>
        <TextareaAutosize
          className="basis-9/12"
          placeholder={placeholder}
          minRows={3}
          {...textAreaProps}
        />
      </FormControl>
    </StyledEngineProvider>
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
