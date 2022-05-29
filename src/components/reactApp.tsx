import { Box } from "@mui/system";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { SidebarMenu } from "./sidebarMenu";

const ReactApp = () => {
  return (
    <div className="app flex">
      <SidebarMenu />
      <div className={classNames("main w-full flex flex-col")}>
        <Header />
        <div className="flex w-full mx-auto content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export { ReactApp };
