import { Box, TextField, Typography } from "@mui/material";
import { ProposalNewCard } from "../common";

type Props = {};

const ProposalForm = (props: Props) => {
  return (
    <Box className="flex flex-col">
      <Box className="flex items-center gap-4">
        <Typography>Proposal Name</Typography>
        <TextField
          id="outlined-basic"
          placeholder="Enter  proposal name here"
        />
      </Box>
    </Box>
  );
};

export { ProposalForm };
