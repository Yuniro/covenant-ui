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
import { ProposalCardHeader } from "../cardHeader";

type Props = {
  protocol: Protocol;
  proposals: Proposal[];
  isHistory?: boolean;
};

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
}));

const ProposalCardActiveSymbol = ({
  protocol,
  proposals,
  isHistory,
}: Props) => {
  const colHeads = ["Name", "Vote Incentive", ""];
  const navigate = useNavigate();

  const onJoinClick = (proposal: Proposal) => {
    navigate("vote", {
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
                {!isHistory && (
                  <Button
                    variant="contained"
                    color="gray"
                    onClick={() => onJoinClick(p)}
                  >
                    Join
                  </Button>
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
