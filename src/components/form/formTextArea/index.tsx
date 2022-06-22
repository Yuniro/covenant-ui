import {
  FormControl,
  StyledEngineProvider,
  TextareaAutosize,
  TextareaAutosizeProps,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import styles from "../styles.module.scss";

type Props = {
  placeholder?: string;
  label?: string;
  textAreaProps?: TextareaAutosizeProps;
};

const FormTextArea = ({ label, placeholder, textAreaProps }: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <FormControl className="flex flex-row items-center gap-4">
        <Typography
          className="basis-3/12 text-white"
          component="label"
          variant="subtitle2"
        >
          {label}
        </Typography>
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
