import { Box, Button, Grid, Typography } from "@mui/material";
import { useLocation, useSearchParams } from "react-router-dom";
import { colors } from "../../common";
import {
  NavBack,
  ProposalCardVaultEmission,
  ProposalCardVaultIncentive,
  ProposalCardVaultReward,
  TimeRemaining,
} from "../../components";

type Props = {};

const ProposalSymbolVote = (props: Props) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const isProposer = searchParams.get("proposer") && true;

  if (!location.state) {
    return <></>;
  }

  const navState = location.state as any;

  let { proposal: currentProposal } = navState;

  if (!currentProposal) {
    // TODO: return to homepage
  }

  return (
    <Box className="main-body flex flex-col grow">
      <Box className="flex flex-col main-content gap-14">
        <Box className="flex justify-between">
          <NavBack />
          {isProposer ? (
            <Box className="flex gap-8">
              <Button variant="contained" color="tealLight">
                Copy Link
              </Button>
              <Button variant="contained" color="tealLight">
                IPFS
              </Button>
              <Button variant="contained" color="tealLight">
                Clawback
              </Button>
            </Box>
          ) : (
            <Button variant="contained" color="tealLight">
              Vote
            </Button>
          )}
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box className="flex flex-col gap-12 mt-12">
            <Box className="flex flex-col">
              <Typography variant="h6">Wrapped Matic (Polygon)</Typography>
              <Typography color={colors.textGray}>
                Description about the proposal
              </Typography>
            </Box>
            <Box className="flex flex-col gap-8">
              <ProposalCardVaultIncentive
                proposal={currentProposal}
                isProposer={isProposer}
              />
              <ProposalCardVaultEmission
                proposal={currentProposal}
                isProposer={isProposer}
              />
              <ProposalCardVaultReward
                proposal={currentProposal}
                isProposer={isProposer}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <TimeRemaining></TimeRemaining>
        </Grid>
      </Grid>
      <Box className="mt-16 mb-32"></Box>
    </Box>
  );
};

export default ProposalSymbolVote;
