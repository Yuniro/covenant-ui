import {
  FormControl,
  StyledEngineProvider,
  TextareaAutosize,
  TextareaAutosizeProps,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import { FormInputProps } from "../formInputProps";
import { FormLabel } from "../formLabel";
import styles from "../styles.module.scss";

interface Props extends FormInputProps {
  textAreaProps?: TextareaAutosizeProps;
}

const FormTextArea = ({
  label,
  helpText,
  placeholder,
  textAreaProps,
}: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <FormControl className="flex flex-row items-center gap-4">
        <FormLabel label={label} helpText={helpText} />
        <TextareaAutosize
          className={classNames("basis-9/12", styles.input)}
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
