import { Card, CardContent, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../../common";
import { ProposalCardHeader } from "../proposal";
import { TextHead } from "../text";

type Props = {};

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
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
            <TextHead>{c.title}</TextHead>
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
