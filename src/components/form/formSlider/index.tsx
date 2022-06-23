import {
  FormControl,
  StyledEngineProvider,
  Typography,
  Box,
  Slider,
} from "@mui/material";

type Props = {
  placeholder?: string;
  label?: string;
  valueLabelFormat?: (value: number, index: number) => string;
};

const FormSlider = ({ label, valueLabelFormat }: Props) => {
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
