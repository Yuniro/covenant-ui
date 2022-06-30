import {
  Card,
  CardContent,
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Proposal } from "../../../@types/proposal";
import {
  EnumProtocolName,
  EnumProtocolSymbolName,
  Protocol,
} from "../../../@types/protocol";
import { TextContent, TextHead } from "../../text";
import { ProposalCardHeader } from "../cardHeader";

type Props = {
  protocol: Protocol;
  proposals: Proposal[];
  isHistory?: boolean;
};

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

const ProposalCardActiveSymbol = ({
  protocol,
  proposals,
  isHistory,
}: Props) => {
  const colHeads = ["Name", "Vote Incentive", ""];
  const navigate = useNavigate();

  const onJoinClick = (proposal: Proposal, idx: number) => {
    const path = idx % 2 === 0 ? "vote" : "vote?proposer=1";
    navigate(path, {
      state: {
        proposal,
      },
    });
  };

  return (
    <Card className="">
      <ProposalCardHeader
        title={`${isHistory ? "History" : "Active"} Proposals for ${
          EnumProtocolName[protocol.symbol]
        }`}
      ></ProposalCardHeader>
      <Content>
        <Box className="grid grid-cols-3 gap-8">
          {colHeads.map((c, idx) => (
            <Box key={`colHead_${idx}`}>
              <TextHead>{c}</TextHead>
            </Box>
          ))}
        </Box>
        <Box className="">
          {proposals.map((p, idx) => (
            <Box key={`prop_${idx}`}>
              <Box className="grid grid-cols-3 gap-8 items-center">
                <TextContent>{p.protocol.name}</TextContent>
                <TextContent>{`${p.reward} ${
                  EnumProtocolSymbolName[p.protocol.symbol]
                }`}</TextContent>
                {isHistory ? (
                  <Box className="text-center">
                    <Button variant="contained" color="tealLight">
                      View
                    </Button>
                  </Box>
                ) : (
                  <Box className="text-center">
                    <Button
                      variant="contained"
                      color="tealLight"
                      onClick={() => onJoinClick(p, idx)}
                    >
                      View
                    </Button>
                  </Box>
                )}
              </Box>
              {idx + 1 < proposals.length && <Divider className={"!my-2"} />}
            </Box>
          ))}
        </Box>
      </Content>
    </Card>
  );
};

ProposalCardActiveSymbol.defaultProps = {
  isHistory: false,
};

export { ProposalCardActiveSymbol };
