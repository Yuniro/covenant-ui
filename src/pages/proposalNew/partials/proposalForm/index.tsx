import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FormTextArea, FormTextField } from "../../../../components/form";
import { ProposalNewCard } from "../common";

type Props = {};

const BoxForm = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
}));

const ProposalForm = (props: Props) => {
  return (
    <Box className="flex flex-col  gap-8">
      <BoxForm className="flex flex-col p-20 rounded-md gap-8">
        <FormTextField
          label="Proposal Name"
          placeholder="Enter  proposal name here"
        />
        <FormTextField label="Proposal Description" />
        <FormTextField
          label="Minimum Proposal"
          placeholder="Minimum proposal can be set to 0"
        />
      </BoxForm>

      <BoxForm className="flex flex-col p-20 rounded-md gap-8">
        <FormTextField label="Vote %" />
        <FormTextField label="Range" />
        <FormTextField label="Payout" />
        <FormTextArea
          label="Blaclist Addresses"
          placeholder="0x000000000000000000"
        />
        <FormTextArea
          label="Whitelist Addresses"
          placeholder="0x000000000000000000"
        />
        <FormTextField
          label="Loyalty Vote"
          placeholder="Number of vote cylces to give payout. Max 4 cylces"
        />
      </BoxForm>
    </Box>
  );
};

export { ProposalForm };
