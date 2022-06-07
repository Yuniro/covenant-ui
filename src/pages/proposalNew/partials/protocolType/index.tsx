import { Box } from "@mui/material";
import { EnumProposalType } from "../../../../@types/proposal";
import { ProposalNewCard } from "../common";

type Props = {};

const ProtocolList = (props: Props) => {
  return (
    <Box className="grid grid-cols-3 gap-20">
      {Object.keys(EnumProposalType).map(pt => (
        <ProposalNewCard
          title={EnumProposalType[pt as keyof typeof EnumProposalType]}
        />
      ))}
    </Box>
  );
};

export default ProtocolList;
