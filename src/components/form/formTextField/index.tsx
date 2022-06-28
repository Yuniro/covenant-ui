import { FormControl, TextField, StyledEngineProvider } from "@mui/material";
import classNames from "classnames";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../formInputProps";
import styles from "../styles.module.scss";
import { FormLabel } from "../formLabel";

interface Props extends FormInputProps {}

const FormTextField = ({
  label,
  placeholder,
  name,
  control,
  rules,
  index,
  helpText,
}: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <FormControl className="flex flex-row items-center gap-4">
        <FormLabel label={label} helpText={helpText} />

        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({
            field: { onChange, value, ref },
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
                ref={ref}
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
