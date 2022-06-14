import React, { FC } from "react";
import { Box, Link, SvgIcon } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import classNames from "classnames";
import { ReactComponent as GaugeIcon } from "../../assets/icons/gauge.svg";
import styles from "./styles.module.scss";

const Header: FC = () => {
  return (
    <header
      className={classNames(
        "flex items-center justify-between content w-full mx-auto",
        styles.main
      )}
    >
      <Box className={classNames("flex items-center gap-4")}>
        <Box
          className={classNames(
            "flex items-center justify-center rounded-full w-24 h-24",
            styles.icon
          )}
        >
          <SvgIcon component={GaugeIcon} viewBox="0 0 31 31" />
        </Box>
        <Typography variant="h3">Dashboard</Typography>
      </Box>
      <Box className="hidden mlg:flex gap-6">
        <Button
          variant="contained"
          color="secondary"
          disableRipple
          className="!cursor-default"
          component="span"
        >
          Polygon
        </Button>
        <Button variant="contained" color="gray">
          Connect your wallet
        </Button>
      </Box>
    </header>
  );
};

export { Header };
