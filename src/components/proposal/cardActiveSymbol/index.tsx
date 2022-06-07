import {
  Card,
  CardContent,
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Proposal } from "../../../@types/proposal";
import {
  EnumProtocolName,
  EnumProtocolSymbolName,
  Protocol,
} from "../../../@types/protocol";
import { ProposalCardHeader } from "../cardHeader";

type Props = {
  protocol: Protocol;
  proposals: Proposal[];
};

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
}));

const ProposalCardActiveSymbol = ({ protocol, proposals }: Props) => {
  const colHeads = ["Name", "Vote Incentive", ""];

  return (
    <Card className="">
      <ProposalCardHeader
        title={`Active Proposals for ${EnumProtocolName[protocol.symbol]}`}
      ></ProposalCardHeader>
      <Content>
        <Box className="grid grid-cols-3 gap-8">
          {colHeads.map((c, idx) => (
            <Box key={`colHead_${idx}`}>
              <Typography variant="caption">{c}</Typography>
            </Box>
          ))}
        </Box>
        <Box className="">
          {proposals.map((p, idx) => (
            <Box key={`prop_${idx}`}>
              <Box className="grid grid-cols-3 gap-8">
                <Typography variant="subtitle2">{p.protocol.name}</Typography>
                <Typography variant="subtitle2">{`${p.reward} ${
                  EnumProtocolSymbolName[p.protocol.symbol]
                }`}</Typography>
                <Button variant="contained" color="gray">
                  Join
                </Button>
              </Box>
              {idx + 1 < proposals.length && <Divider className={"!my-2"} />}
            </Box>
          ))}
        </Box>
      </Content>
    </Card>
  );
};

export { ProposalCardActiveSymbol };
