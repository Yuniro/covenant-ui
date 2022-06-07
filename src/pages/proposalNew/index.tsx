import { Box, Typography } from "@mui/material";
import React from "react";
import { EnumProposalKpi, EnumProposalType } from "../../@types/proposal";
import { CardRewards } from "../../components";
import ProtocolList from "./partials/protocolList";

type Props = {};

const ProposalNewPage = (props: Props) => {
  console.log('+++++', Object.keys(EnumProposalType));
  return (
    <Box className="main-body flex flex-col grow">
      <Box className="flex flex-col min-h-full main-content gap-14">
        <Box>
          <ProtocolList />
        </Box>
      </Box>
    </Box>
  );
};

export default ProposalNewPage;
