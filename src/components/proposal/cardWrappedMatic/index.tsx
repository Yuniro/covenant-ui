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

const ProposalCardWrappedMatic = ({ proposal }: Props) => {
  const colHeads = ["Total Incentive", "Total Votes", "Total Votes Amount", ""];
  return (
    <Card className="">
      <ProposalCardHeader title="Wrapped Matic (Polygon)"></ProposalCardHeader>
      <Content>
        <Box className="grid grid-cols-4 gap-8">
          {colHeads.map((c, idx) => (
            <Box key={`colHead_${idx}`}>
              <Typography variant="caption">{c}</Typography>
            </Box>
          ))}
        </Box>
        <Box className="grid grid-cols-4 gap-8">
          <Typography variant="subtitle2">${proposal.matic.total}</Typography>
          <Typography variant="subtitle2">{`${proposal.matic.votes}`}</Typography>
          <Typography variant="subtitle2">{`${proposal.matic.amount}`}</Typography>
        </Box>
      </Content>
    </Card>
  );
};

export { ProposalCardWrappedMatic };
