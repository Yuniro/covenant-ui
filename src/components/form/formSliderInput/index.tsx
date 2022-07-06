import {
  FormControl,
  StyledEngineProvider,
  Box,
  Slider,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../formInputProps";
import { FormLabel } from "../formLabel";

interface Props extends FormInputProps {
  valueLabelFormat?: (value: number, index: number) => string;
  inputName: string;
  updateSlider?: (index: number, obj: number) => void;
  updateInput?: (index: number, obj: number) => void;
}

const FormSliderInput = ({
  label,
  name,
  inputName,
  control,
  rules,
  index,
  helpText,
  valueLabelFormat,
  setValue,
  updateSlider,
  updateInput,
}: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <FormControl className="flex flex-row flex-auto items-center gap-4">
        <FormLabel label={label} helpText={helpText} />
        <Box className="basis-9/12 flex">
          <Box className="basis-9/12 flex items-center">
            <Controller
              name={name}
              control={control}
              render={({
                field: { onChange, value, name, ref },
                formState,
              }) => {
                let slideVal = Number(value);
                if (typeof index !== "undefined" && Array.isArray(value)) {
                  slideVal = Number(value[index].value);
                }
                return (
                  <Slider
                    getAriaLabel={() => "Default"}
                    ref={ref}
                    value={slideVal}
                    onChange={(e, changeVal) => {
                      let finalVal = 0;
                      if (Array.isArray(changeVal)) {
                        finalVal = changeVal[0];
                      } else {
                        finalVal = changeVal;
                      }
                      if (updateInput && typeof index !== undefined) {
                        updateInput(index ?? 0, finalVal);
                      } else {
                        setValue(inputName, finalVal);
                      }
                      onChange(changeVal);
                    }}
                    valueLabelDisplay="auto"
                    valueLabelFormat={valueLabelFormat}
                  />
                );
              }}
            />
          </Box>
          <Box className="basis-1/12"></Box>
          <Box className="basis-2/12">
            <Controller
              name={inputName}
              control={control}
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
                    ref={ref}
                    helperText={error ? error.message : null}
                    error={!!error}
                    type="number"
                    InputProps={{
                      inputProps: { min: 0, max: 100, maxLength: 3 },
                    }}
                    onChange={e => {
                      if (updateSlider && typeof index !== "undefined") {
                        updateSlider(index ?? 0, Number(e.target.value));
                      } else {
                        setValue(name, Number(e.target.value));
                      }
                      onChange(e.target.value);
                    }}
                    value={txtValue}
                    fullWidth
                  />
                );
              }}
            />
          </Box>
        </Box>
      </FormControl>
    </StyledEngineProvider>
  );
};

FormSliderInput.defaultProps = {
  label: "",
  placeholder: "",
};

export { FormSliderInput };
