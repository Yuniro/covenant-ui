import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  FormTextArea,
  FormTextField,
  FormSelect,
} from "../../../../components/form";
import { ProposalNewCard } from "../common";

type Props = {};

const BoxForm = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
}));

const ProposalForm = (props: Props) => {
  const navigate = useNavigate();

  const onFormSubmit = () => {
    navigate("preview", {
      state: {
        myProp: "Hey there",
      },
    });
  };

  return (
    <Box className="flex flex-col gap-8 ">
      <BoxForm className="flex flex-col p-20 rounded-md gap-8">
        <FormTextField
          label="Proposal Name"
          placeholder="Enter  proposal name here"
        />
        <FormTextField label="Proposal Description" />
        <FormSelect
          label="Snapshot Proposal"
          placeholder="Choose a snashot proposal"
          items={[
            { value: 1, display: "Snapshot 1" },
            { value: 2, display: "Snapshot 2" },
          ]}
        />
        <FormSelect
          label="Reward Currency"
          placeholder="Choose your reward currency"
          items={[
            { value: 1, display: "Currency 1" },
            { value: 2, display: "Currency 2" },
          ]}
        />
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
      <Box className="mb-20 flex justify-end">
        <Button variant="contained" color="pink" onClick={onFormSubmit}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export { ProposalForm };
