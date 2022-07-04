import { Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../common";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const TextHead: React.FC<Props> = ({ children, className }) => (
  <Typography variant="caption" color={colors.textGray} className={className}>
    {children}
  </Typography>
);

export { TextHead };
