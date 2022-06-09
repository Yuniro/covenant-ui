import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { ProtocolList, ProposalType, ProposalKpi, ProposalForm } from "./partials";
import { PageHeader } from "./partials/common";

type Props = {};

const ProposalNewPage = (props: Props) => {
  const { protocol, prsalType, kpi } = useParams();
  return (
    <Box className="main-body flex flex-col grow">
      <Box className="flex flex-col min-h-full main-content gap-14">
        <PageHeader />
        <Box>
          {prsalType && protocol && kpi ? (
            <ProposalForm />
          ) : prsalType && protocol ? (
            <ProposalKpi />
          ) : protocol ? (
            <ProposalType />
          ) : (
            <ProtocolList />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProposalNewPage;
