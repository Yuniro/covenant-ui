import {
  Card,
  CardContent,
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { EnumProtocolSymbolName } from "../../../@types/protocol";
import { useSelector } from "../../../redux/store";
import { ProposalCardHeader } from "../cardHeader";

type Props = {};

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
}));

const ProposalCardActive = (props: Props) => {
  const colHeads = ["Protocol", "Status", "Reward Accumulated", ""];

  const proposalState = useSelector(state => state.proposal);

  const { activeProposals } = proposalState;
  return (
    <Card className="">
      <ProposalCardHeader title="My active proposals"></ProposalCardHeader>
      <Content>
        <Box className="grid grid-cols-4 gap-8 mb-8">
          {colHeads.map((c, idx) => (
            <Box key={`colHead_${idx}`}>
              <Typography variant="caption">{c}</Typography>
            </Box>
          ))}
        </Box>
        <Box className="">
          {activeProposals.map((p, idx) => (
            <Box key={`prop_${idx}`}>
              <Box className="grid grid-cols-4 gap-8">
                <Typography variant="subtitle1">{p.protocol.name}</Typography>
                <Typography variant="subtitle1">
                  {p.isActive ? "Active" : "Inactive"}
                </Typography>
                <Typography variant="subtitle1">{`${p.reward} ${
                  EnumProtocolSymbolName[p.protocol.symbol]
                }`}</Typography>
                <Box className="flex justify-center">
                  <Button variant="contained" color="gray">
                    Claim
                  </Button>
                </Box>
              </Box>
              {idx + 1 < activeProposals.length && (
                <Divider className={"!my-4"} />
              )}
            </Box>
          ))}
        </Box>
      </Content>
    </Card>
  );
};

export { ProposalCardActive };
