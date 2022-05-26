import { Box, Link, Typography } from "@mui/material";
import clsx from "clsx";
import styles from "./styles.module.scss";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <Box className={clsx("w-full h-full mlg:w-96 p-10", styles.main)}>
      <Link href="/" className="py-4 flex" underline="none">
        <Typography>Dashboard</Typography>
      </Link>
      <Link href="/proposal" className="py-4 flex" underline="none">
        <Typography>Proposal</Typography>
      </Link>
    </Box>
  );
};

export { Sidebar };
