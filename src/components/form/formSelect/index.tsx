import {
  FormControl,
  StyledEngineProvider,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";
import { FormInputProps } from "../formInputProps";
import { FormLabel } from "../formLabel";
import styles from "../styles.module.scss";

interface Props extends FormInputProps {
  items?: FormMenuItemType[];
}

export type FormMenuItemType = {
  value?: string | number | readonly string[] | undefined;
  display: ReactNode;
};

const FormSelect = ({ label, helpText, items, placeholder }: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <FormControl className="flex flex-row items-center gap-4">
        <FormLabel label={label} helpText={helpText} />
        <Select className="basis-9/12" placeholder={placeholder}>
          {items?.map((item, idx) => (
            <MenuItem
              key={`mi_${idx}`}
              className={styles.menuItem}
              value={item.value}
            >
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
