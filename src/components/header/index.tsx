import React, { FC, MouseEventHandler } from "react";
import {
  Container,
  Toolbar,
  AppBar,
  Box,
  Link,
  SvgIcon,
  IconButton,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import classNames from "classnames";
import { ReactComponent as GaugeIcon } from "../../assets/icons/gauge.svg";
import styles from "./styles.module.scss";

const Header: FC = () => {
  const { PUBLIC_URL } = process.env;

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.classList.toggle("is-active");
    document.body.classList.toggle("show-menu");
  };

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
        <Button variant="contained" color="secondary">
          Polygon
        </Button>
        <Button variant="contained" color="gray">
          Connect your wallet
        </Button>
      </Box>
    </header>
  );

  return (
    <AppBar position="static">
      <Toolbar className="py-10">
        <Box className="flex flex-auto items-center justify-between">
          <Link href="/" underline="none">
            <Typography variant="h3" color="primary">
              Convenant
            </Typography>
          </Link>
          <Box className="hidden mlg:flex gap-6">
            <Button variant="contained" color="secondary">
              Create Proposal
            </Button>
            <Box className={classNames("rounded-r-md", styles.action)}>
              <Button variant="contained" color="third">
                Polygon
              </Button>
              <Button
                variant="contained"
                color="gray"
                className="rounded-l-none"
              >
                Connect
              </Button>
            </Box>
          </Box>
          <Box className="mlg:hidden">
            <button
              className="hamburger hamburger--squeeze"
              type="button"
              onClick={onButtonClick}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
