import { Card, CardContent, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProposalCardHeader } from "../proposal";

type Props = {};

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
}));

const CardRewards = (props: Props) => {
  const cols = [
    { title: "Pending Rewards", value: "$28,912" },
    { title: "Active Proposals", value: "3" },
    { title: "Total Votes Given", value: "16" },
  ];
  return (
    <Card className="">
      <ProposalCardHeader title="My total rewards"></ProposalCardHeader>
      <Content className="grid grid-cols-4 gap-8">
        {cols.map((c, idx) => (
          <Box key={`col_${idx}`} className="flex flex-col gap-5">
            <Typography variant="caption">{c.title}</Typography>
            <Typography variant="subtitle2">{c.value}</Typography>
          </Box>
        ))}
      </Content>
    </Card>
  );
};

export { CardRewards };
