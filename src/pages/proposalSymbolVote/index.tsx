import { Box, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { NavBack, ProposalCardVaultIncentive } from "../../components";
import { ProposalCardWrappedMatic } from "../../components/proposal/cardWrappedMatic";

type Props = {};

const tabs: string[] = ["Proposals", "History"];

const ProposalSymbolVote = (props: Props) => {
  const location = useLocation();

  if (!location.state) {
    return <></>;
  }

  const navState = location.state as any;

  let { proposal: currentProposal } = navState;
  console.log("???", currentProposal);

  if (!currentProposal) {
    // TODO: return to homepage
  }

  return (
    <Box className="main-body flex flex-col grow">
      <Box className="flex flex-col main-content gap-14">
        <Box className="flex justify-between">
          <NavBack />
          <Typography>Time Remaining: 12 days 13 hours</Typography>
        </Box>
      </Box>
      <Box className="mt-16 mb-32">
      <ProposalCardVaultIncentive proposal={currentProposal} />
      </Box>
      <ProposalCardWrappedMatic proposal={currentProposal} />
    </Box>
  );
};

export default ProposalSymbolVote;
