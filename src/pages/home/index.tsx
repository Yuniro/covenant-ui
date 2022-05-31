import { Box, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { PageHeader, SectionHeader } from "../../components";

type Props = {};

const Homepage = (props: Props) => {
  const headerTitle = () => {
    return (
      <Box className="flex items-center gap-4">
        <SvgIcon
          component={UserIcon}
          viewBox="0 0 80 80"
          style={{ fontSize: "8rem" }}
        />
        <Typography variant="h4">0x27379hs2992ks2022</Typography>
      </Box>
    );
  };

  return (
    <Box className="main-body">
      <PageHeader
        heading={headerTitle}
        subHeading="Total Rewards Pending"
        value="$1,892"
      />
      <Box className="flex hidden flex-col min-h-full main-content">
        <SectionHeader heading="My Rewards" />
        <SectionHeader heading="My Proposals" />
      </Box>
    </Box>
  );
};

export default Homepage;
