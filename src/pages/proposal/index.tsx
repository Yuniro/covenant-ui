import { Box, Typography } from "@mui/material";
import React from "react";
import { CardRewards } from "../../components";

type Props = {};

const ProposalPage = (props: Props) => {
  return (
    <Box className="main-body flex flex-col grow">
      <Box className="flex flex-col min-h-full main-content gap-14">
        <CardRewards />
      </Box>
    </Box>
  );
};

export default ProposalPage;
