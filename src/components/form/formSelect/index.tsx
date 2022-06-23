import {
  FormControl,
  StyledEngineProvider,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";
import styles from "../styles.module.scss";

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
        <Typography
          className="basis-3/12 text-white"
          component="label"
          variant="subtitle2"
        >
          {label}
        </Typography>
        <Select className="basis-9/12" placeholder={placeholder}>
          {items?.map((item, idx) => (
            <MenuItem key={`mi_${idx}`} className={styles.menuItem} value={item.value}>
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
