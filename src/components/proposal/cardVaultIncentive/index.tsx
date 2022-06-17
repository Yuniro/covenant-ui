import { Card, CardContent, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Proposal } from "../../../@types/proposal";
import { ProposalCardHeader } from "../cardHeader";

type Props = {
  proposal: Proposal;
};

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
}));

const ProposalCardVaultIncentive = ({ proposal }: Props) => {
  const colHeads = ["Total Value Locked", "My Vote", "My Share of Pool", ""];
  return (
    <Card className="">
      <ProposalCardHeader title="Vault Incentive Gauge"></ProposalCardHeader>
      <Content>
        <Box className="grid grid-cols-4 gap-8">
          {colHeads.map((c, idx) => (
            <Box key={`colHead_${idx}`}>
              <Typography variant="caption">{c}</Typography>
            </Box>
          ))}
        </Box>
        <Box className="grid grid-cols-4 gap-8">
          <Typography variant="subtitle2">${proposal.totalValue}</Typography>
          <Typography variant="subtitle2">{`${proposal.userVote}`}</Typography>
          <Typography variant="subtitle2">{`${proposal.userShare}%`}</Typography>
        </Box>
      </Content>
    </Card>
  );
};

export { ProposalCardVaultIncentive };
