import {
  Card,
  CardContent,
  Box,
  Typography,
  Divider,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import classNames from "classnames";
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

const Content = styled(CardContent)(({ theme }) => ({}));

const ProposalCardActiveSymbol = ({
  protocol,
  proposals,
  isHistory,
}: Props) => {
  const colHeads = ["Name", "Vote Incentive", ""];
  const navigate = useNavigate();
  const theme = useTheme();
  const isAboveMd = useMediaQuery(theme.breakpoints.up("smd"));

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
      <Content className="!p-0">
        <Box
          className={classNames(
            "grid grid-cols-3 gap-8 px-6 mb-8",
            !isAboveMd && "hidden"
          )}
        >
          {colHeads.map((c, idx) => (
            <Box key={`colHead_${idx}`}>
              <TextHead>{c}</TextHead>
            </Box>
          ))}
        </Box>
        <Box className="flex flex-col gap-4">
          {proposals.map((p, idx) => (
            <Box key={`prop_${idx}`} className="p-6 bg-black rounded-md">
              <Box
                className={classNames(
                  "grid gap-8",
                  isAboveMd ? "grid-cols-3 items-center" : "grid-cols-2"
                )}
              >
                <Box
                  className={classNames("flex flex-col", !isAboveMd && "gap-1")}
                >
                  <TextHead className={classNames(isAboveMd && "hidden")}>
                    {colHeads[0]}
                  </TextHead>
                  <TextContent>{p.protocol.name}</TextContent>
                </Box>
                <Box
                  className={classNames("flex flex-col", !isAboveMd && "gap-1")}
                >
                  <TextHead className={classNames(isAboveMd && "hidden")}>
                    {colHeads[1]}
                  </TextHead>
                  <TextContent>{`${p.reward} ${
                    EnumProtocolSymbolName[p.protocol.symbol]
                  }`}</TextContent>
                </Box>
                {isHistory ? (
                  <Box className={classNames(isAboveMd && "text-center")}>
                    <Button variant="contained" color="tealLight">
                      View
                    </Button>
                  </Box>
                ) : (
                  <Box className={classNames(isAboveMd && "text-center")}>
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
