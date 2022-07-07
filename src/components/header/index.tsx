import { FC } from "react";
import { Box, Button } from "@mui/material";
import classNames from "classnames";
import { HeaderLeft } from "./left";
import styles from "./styles.module.scss";

const Header: FC = () => {
  return (
    <header
      className={classNames(
        "flex items-center justify-between content w-full mx-auto",
        styles.main
      )}
    >
      <HeaderLeft />
      <Box className="hidden mlg:flex gap-6">
        <Button
          variant="contained"
          color="third"
          disableRipple
          className="!cursor-default"
          component="span"
        >
          Polygon
        </Button>
        <Button variant="contained" color="tealLight">
          Connect
        </Button>
      </Box>
    </header>
  );
};

export { Header };
