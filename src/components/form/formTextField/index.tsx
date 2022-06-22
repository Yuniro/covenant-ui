import {
  FormControl,
  TextField,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import styles from "../styles.module.scss";

type Props = {
  placeholder?: string;
  label?: string;
};

const FormTextField = ({ label, placeholder }: Props) => {
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
        <TextField
          className={classNames("basis-9/12", styles.input)}
          placeholder={placeholder}
        />
      </FormControl>
    </StyledEngineProvider>
  );
};

FormTextField.defaultProps = {
  label: "",
  placeholder: "",
};

export { FormTextField };
