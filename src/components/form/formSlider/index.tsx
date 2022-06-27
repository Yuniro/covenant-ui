import {
  FormControl,
  StyledEngineProvider,
  Typography,
  Box,
  Slider,
} from "@mui/material";
import { FormInputProps } from "../formInputProps";
import { FormLabel } from "../formLabel";

interface Props extends FormInputProps {
  valueLabelFormat?: (value: number, index: number) => string;
}

const FormSlider = ({ label, helpText, valueLabelFormat }: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <FormControl className="flex flex-row items-center gap-4">
        <FormLabel label={label} helpText={helpText} />
        <Box className="basis-9/12">
          <Slider
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
            valueLabelFormat={valueLabelFormat}
          />
        </Box>
      </FormControl>
    </StyledEngineProvider>
  );
};

FormSlider.defaultProps = {
  label: "",
  placeholder: "",
};

export { FormSlider };
