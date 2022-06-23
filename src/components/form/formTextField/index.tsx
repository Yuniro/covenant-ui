import {
  FormControl,
  TextField,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../formInputProps";
import styles from "../styles.module.scss";

interface Props extends FormInputProps {
  placeholder?: string;
  label?: string;
}

const FormTextField = ({
  label,
  placeholder,
  name,
  control,
  rules,
  index,
}: Props) => {
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

        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => {
            let txtValue = value;
            if (typeof index !== "undefined" && Array.isArray(value)) {
              txtValue = value[index].value;
            }
            return (
              <TextField
                className={classNames("basis-9/12", styles.input)}
                placeholder={placeholder}
                helperText={error ? error.message : null}
                error={!!error}
                onChange={onChange}
                value={txtValue}
                fullWidth
              />
            );
          }}
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
