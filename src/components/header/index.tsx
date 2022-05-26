import React, { FC, MouseEventHandler } from "react";
import { Container, Toolbar, AppBar, Box, Link, SvgIcon } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Header: FC = () => {
  const { PUBLIC_URL } = process.env;


  return (
    <AppBar position="static">
      <Toolbar className="py-10">
        <Box className="flex flex-auto items-center justify-between">
          <Link href="/" underline="none">
            <Typography variant="h3" color="primary">
              Convenant
            </Typography>
          </Link>
          <Box className="flex gap-6">
            <Button variant="contained" color="secondary">
              Create Proposal
            </Button>
            <Box className={clsx("rounded-r-md", styles.action)}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
