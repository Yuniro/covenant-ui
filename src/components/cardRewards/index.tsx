import { Card, CardContent, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProposalCardHeader } from "../proposal";

type Props = {};

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
}));

const CardRewards = (props: Props) => {
  const cols = [
    { title: "Pending Rewards", isText: false, value: "$28,912" },
    { title: "Active Proposals", isText: false, value: "3" },
    { title: "Total Votes Given", isText: false, value: "16" },
    { title: "Description", isText: true, value: "Dummy description" },
  ];
  return (
    <Card className="">
      <ProposalCardHeader title="My total rewards"></ProposalCardHeader>
      <Content className="grid grid-cols-4 gap-8">
        {cols.map((c, idx) => (
          <Box key={`col_${idx}`} className="flex flex-col gap-5">
            <Typography variant="caption">{c.title}</Typography>
            {c.isText ? (
              <Typography variant="subtitle2">{c.value}</Typography>
            ) : (
              <Typography variant="h5">{c.value}</Typography>
            )}
          </Box>
        ))}
      </Content>
    </Card>
  );
};

export { CardRewards };
