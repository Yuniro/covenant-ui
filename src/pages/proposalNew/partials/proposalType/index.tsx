import { Box } from "@mui/material";
import { EnumProposalType } from "../../../../@types/proposal";
import { ProposalNewCard } from "../common";

type Props = {};

const ProposalType = (props: Props) => {
  return (
    <Box className="grid grid-cols-3 gap-20">
      {Object.keys(EnumProposalType).map((pt, idx) => (
        <ProposalNewCard
          key={`pl_${idx}`}
          title={EnumProposalType[pt as keyof typeof EnumProposalType]}
          slug={pt}
        />
      ))}
    </Box>
  );
};

export { ProposalType };
