import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { FormDataPreview } from "../../../../components/form";

type Props = {};

const ProposalConfirm = (props: Props) => {

  return (
    <Box className="flex flex-col  gap-8">
      <Box className="flex flex-col p-20 rounded-md gap-8">
        <Typography>
          Your proposal has been created, you can view your proposal by opening
          this link https://covenant.vote/yhs77hannnnabsh69 IPFS: LINK
        </Typography>
      </Box>
    </Box>
  );
};

export { ProposalConfirm };
