import { Card, CardContent, Box, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import classNames from "classnames";
import { ProposalCardHeader } from "../proposal";
import { TextHead } from "../text";

type Props = {};

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

const CardRewards = (props: Props) => {
  const theme = useTheme();
  const isAboveMd = useMediaQuery(theme.breakpoints.up("smd"));
  const cols = [
    { title: "Pending Rewards", isText: false, value: "$28,912" },
    { title: "Active Proposals", isText: false, value: "3" },
    { title: "Total Votes Given", isText: false, value: "16" },
    { title: "Description", isText: true, value: "Dummy description" },
  ];
  return (
    <Card className="">
      <ProposalCardHeader title="My total rewards"></ProposalCardHeader>
      <Content
        className={classNames(
          "grid gap-8",
          isAboveMd ? "grid-cols-4" : "grid-cols-1"
        )}
      >
        {cols.map((c, idx) => (
          <Box
            key={`col_${idx}`}
            className={classNames(
              "flex flex-col",
              isAboveMd ? "gap-5" : "gap-1"
            )}
          >
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
