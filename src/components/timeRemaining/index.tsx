import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../../common";

type Props = {};

const CircleMain = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "65%",
  height: "65%",
}));

const CircleGradient = styled(Box)(({ theme }) => ({
  background: `linear-gradient(90deg, ${colors.teal} 2%, ${colors.tealLight} 96%)`,
  width: "85%",
  height: "85%",
}));

const CircleCounter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "85%",
  height: "85%",
}));

const TimeRemaining: React.FC<Props> = props => (
  <Box className="grid h-full items-center ">
    <CircleMain className="mx-auto rounded-full grid items-center">
      <CircleGradient className="mx-auto rounded-full grid items-center">
        <CircleCounter className="mx-auto rounded-full flex flex-col justify-center items-center">
          <Typography variant="h6" className="!font-bold">24:13:02:30</Typography>
          <Typography>Time Remaining</Typography>
        </CircleCounter>
      </CircleGradient>
    </CircleMain>
  </Box>
);

export { TimeRemaining };
