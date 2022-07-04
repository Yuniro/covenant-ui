import React from "react";
import classNames from "classnames";
import {
  CardContent,
  Box,
  Divider,
  Button,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { EnumProtocolSymbolName } from "../../../@types/protocol";
import { Proposal } from "../../../@types/proposal";
import { TextContent, TextHead } from "../../text";

interface Props {
  proposals: Proposal[];
  heads: string[];
}

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

const ProposalListCard: React.FC<Props> = ({ proposals, heads }) => {
  const theme = useTheme();
  const isAboveMd = useMediaQuery(theme.breakpoints.up("smd"));

  return (
    <Content>
      <Box
        className={classNames(
          "grid grid-cols-4 gap-8 mb-8",
          !isAboveMd && "hidden"
        )}
      >
        {heads.map((c, idx) => (
          <Box key={`colHead_${idx}`}>
            <TextHead>{c}</TextHead>
          </Box>
        ))}
      </Box>
      <Box className="">
        {proposals.map((p, idx) => (
          <Box key={`prop_${idx}`}>
            <Box
              className={classNames(
                "grid gap-8",
                isAboveMd ? "grid-cols-4" : "grid-cols-2"
              )}
            >
              <Box
                className={classNames("flex flex-col", !isAboveMd && "gap-1")}
              >
                <TextHead className={classNames(isAboveMd && "hidden")}>
                  {heads[0]}
                </TextHead>
                <TextContent>{p.protocol.name}</TextContent>
              </Box>
              <Box
                className={classNames("flex flex-col", !isAboveMd && "gap-1")}
              >
                <TextHead className={classNames(isAboveMd && "hidden")}>
                  {heads[1]}
                </TextHead>
                <TextContent>{p.isActive ? "Active" : "Inactive"}</TextContent>
              </Box>
              <Box
                className={classNames(
                  "flex flex-col",
                  !isAboveMd && "gap-1 col-span-3"
                )}
              >
                <TextHead className={classNames(isAboveMd && "hidden")}>
                  {heads[2]}
                </TextHead>
                <TextContent>{`${p.reward} ${
                  EnumProtocolSymbolName[p.protocol.symbol]
                }`}</TextContent>
              </Box>
              <Box
                className={classNames("flex", isAboveMd && "justify-center")}
              >
                <Button variant="contained" color="tealLight">
                  View
                </Button>
              </Box>
            </Box>
            {idx + 1 < proposals.length && <Divider className={"!my-4"} />}
          </Box>
        ))}
      </Box>
    </Content>
  );
};

export default ProposalListCard;
