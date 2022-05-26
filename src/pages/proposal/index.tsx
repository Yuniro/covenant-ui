import { Box, Typography } from "@mui/material";
import React from "react";
import { PageHeader } from "../../components";

type Props = {};

const ProposalPage = (props: Props) => {
  return (
    <Box>
      <PageHeader
        heading="Convenant"
        headingSub="Protocol"
        subHeading="Total Rewards Available"
        value="$1,961,069"
      />
    </Box>
  );
};

export default ProposalPage;
