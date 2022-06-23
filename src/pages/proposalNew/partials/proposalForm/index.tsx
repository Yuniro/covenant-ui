import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useFieldArray, useForm } from "react-hook-form";
import {
  FormTextArea,
  FormTextField,
  FormSelect,
  FormSlider,
} from "../../../../components/form";
import { ProposalNewCard } from "../common";

type Props = {};

const BoxForm = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
}));

const ProposalForm = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      votePercent: [{ value: 0 }],
      range: [{ value: 0 }],
      payout: [{ value: "" }],
    },
  });

  const {
    fields: votePercentFields,
    append: votePercentAppend,
    remove: votePercentRemove,
  } = useFieldArray({ control, name: "votePercent" });

  const {
    fields: rangeFields,
    append: rangeAppend,
    remove: rangeRemove,
  } = useFieldArray({ control, name: "range" });

  const {
    fields: payoutFields,
    append: payoutAppend,
    remove: payoutRemove,
  } = useFieldArray({ control, name: "payout" });

  const onFormSubmit = () => {
    navigate("preview", {
      state: {
        myProp: "Hey there",
      },
    });
  };

  return (
    <Box
      className="flex flex-col gap-8 "
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <BoxForm className="flex flex-col p-20 rounded-md gap-8">
        <FormTextField
          label="Proposal Name"
          name="proposalName"
          control={control}
          rules={{
            required: { value: true, message: "You must enter proposal name." },
          }}
          placeholder="Enter  proposal name here"
        />
        <FormTextField
          label="Proposal Description"
          name="proposalDescription"
          rules={{
            required: {
              value: true,
              message: "You must enter proposal description.",
            },
          }}
          control={control}
        />
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
          name="minimumProposal"
          control={control}
          rules={{
            required: {
              value: true,
              message: "You must enter minimum proposal.",
            },
          }}
          placeholder="Minimum proposal can be set to 0"
        />
      </BoxForm>

      <BoxForm className="flex flex-col p-20 rounded-md gap-8">
        {votePercentFields.map((vp, idx) => (
          <Box key={vp.id} className="flex flex-col gap-8">
            <FormSlider
              label="Vote %"
              valueLabelFormat={(value: number) => `${value}%`}
            />
            <FormSlider label="Range" />
            <FormTextField
              label="Payout"
              name="payout"
              control={control}
              index={idx}
            />
          </Box>
        ))}

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
          name="loyaltyVote"
          control={control}
          rules={{
            required: { value: true, message: "You must enter loyalty vote." },
          }}
          placeholder="Number of vote cylces to give payout. Max 4 cylces"
        />
      </BoxForm>
      <Box className="mb-20 flex justify-end">
        <Button variant="contained" color="pink" type="submit">
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export { ProposalForm };
