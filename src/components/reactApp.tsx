import { Box } from "@mui/system";
import clsx from "clsx";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

const ReactApp = () => {
  return (
    <div className="app h-full flex flex-col">
      <Header />
      <div className={clsx("main w-full h-full flex")}>
        <Sidebar />
        <Box className={clsx("w-full min-h-full flex flex-col")}>
          <Outlet />
        </Box>
      </div>
    </div>
  );
};

export { ReactApp };
