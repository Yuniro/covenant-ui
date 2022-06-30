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
import { TextContent, TextHead } from "../../text";
import { ProposalCardHeader } from "../cardHeader";

type Props = {};

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

const ProposalCardCreated = (props: Props) => {
  const colHeads = ["Protocol", "Total Participants", "Total Votes Given", ""];

  const proposalState = useSelector(state => state.proposal);

  const { activeProposals } = proposalState;
  return (
    <Card className="">
      <ProposalCardHeader title="My created proposals"></ProposalCardHeader>
      <Content>
        <Box className="grid grid-cols-4 gap-8 mb-8">
          {colHeads.map((c, idx) => (
            <Box key={`colHead_${idx}`}>
              <TextHead>{c}</TextHead>
            </Box>
          ))}
        </Box>
        <Box className="">
          {activeProposals.map((p, idx) => (
            <Box key={`prop_${idx}`}>
              <Box className="grid grid-cols-4 gap-8">
                <TextContent>{p.protocol.name}</TextContent>
                <TextContent>{p.isActive ? "Active" : "Inactive"}</TextContent>
                <TextContent>{`${p.reward} ${
                  EnumProtocolSymbolName[p.protocol.symbol]
                }`}</TextContent>
                <Box className="flex justify-center">
                  <Button variant="contained" color="tealLight">
                    View
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

export { ProposalCardCreated };
