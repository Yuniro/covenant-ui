import {
  FormControl,
  FormLabel,
  StyledEngineProvider,
  Select,
  MenuItem,
} from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  placeholder?: string;
  label?: string;
  items?: FormMenuItemType[];
};

export type FormMenuItemType = {
  value?: string | number | readonly string[] | undefined;
  display: ReactNode;
};

const FormSelect = ({ label, items, placeholder }: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <FormControl className="flex flex-row items-center gap-4">
        <FormLabel className="basis-3/12">{label}</FormLabel>
        <Select className="basis-9/12" placeholder={placeholder}>
          {items?.map((item, idx) => (
            <MenuItem key={`mi_${idx}`} value={item.value}>
              {item.display}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledEngineProvider>
  );
};

FormSelect.defaultProps = {
  label: "",
  placeholder: "",
  items: [],
};

export { FormSelect };
