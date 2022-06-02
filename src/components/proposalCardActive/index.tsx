import {
  Card,
  CardContent,
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProposalCardHeader } from "../proposalCardHeader";

type Props = {};

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
}));

const ProposalCardActive = (props: Props) => {
  const colHeads = ["Protocol", "Status", "Reward Accumulated", ""];
  const proposals = [
    { name: "QiDAO", isActive: true, symbol: "Qi", reward: "56,000" },
    { name: "Aave Proposals", isActive: true, symbol: "Aave", reward: "1,200" },
  ];
  return (
    <Card className="">
      <ProposalCardHeader title="My active proposals"></ProposalCardHeader>
      <Content>
        <Box className="grid grid-cols-4 gap-8">
          {colHeads.map((c, idx) => (
            <Box key={`colHead_${idx}`}>
              <Typography variant="caption">{c}</Typography>
            </Box>
          ))}
        </Box>
        <Box className="">
          {proposals.map((p, idx) => (
            <>
              <Box key={`prop_${idx}`} className="grid grid-cols-4 gap-8">
                <Typography variant="subtitle2">{p.name}</Typography>
                <Typography variant="subtitle2">
                  {p.isActive ? "Active" : "Inactive"}
                </Typography>
                <Typography variant="subtitle2">{`${p.reward} ${p.symbol}`}</Typography>
                <Button variant="contained" color="gray">Claim</Button>
              </Box>
              {idx + 1 < proposals.length && <Divider className={"!my-2"} />}
            </>
          ))}
        </Box>
      </Content>
    </Card>
  );
};

export { ProposalCardActive };
