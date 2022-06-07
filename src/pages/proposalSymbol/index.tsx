import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Proposal } from "../../@types/proposal";
import { ProposalCardActive, ProposalCardActiveSymbol } from "../../components";
import { useSelector } from "../../redux/store";
import { ProtocolsList } from "../../@types/protocol";

type Props = {};

const ProposalPage = (props: Props) => {
  let { symbol } = useParams();
  const proposalState = useSelector(state => state.proposal);

  const paramSymbol = symbol ?? "";

  if (!paramSymbol) {
    // TODO: return to homepage
  }

  const filteredProposals = proposalState.activeProposals.filter(
    ap => ap.protocol.symbol === paramSymbol
  );

  const filteredProtocol = ProtocolsList.filter(p => p.symbol === paramSymbol);

  if (filteredProtocol.length === 0) {
    // TODO: return as we did not find correct protocol
  }

  return (
    <Box className="main-body flex flex-col grow">
      <Box className="flex flex-col min-h-full main-content gap-14">
        <ProposalCardActiveSymbol
          protocol={filteredProtocol[0]}
          proposals={filteredProposals}
        />
      </Box>
    </Box>
  );
};

export default ProposalPage;
