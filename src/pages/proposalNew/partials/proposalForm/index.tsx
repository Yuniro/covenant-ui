import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { useFieldArray, useForm } from "react-hook-form";
import {
  FormTextArea,
  FormTextField,
  FormSelect,
  FormSlider,
  FormRangeSlider,
} from "../../../../components/form";
import { ProposalNewCard } from "../common";

type Props = {};

const BoxForm = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
}));

const ProposalForm = (props: Props) => {
  const navigate = useNavigate();
  const { prsalType, kpi } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      proposalName: "",
      proposalDescription: "",
      snapshotProposal: "",
      desiredVote: "",
      gaugeFixed: "",
      rewardCurrency: "",
      minimumProposal: "",
      loyaltyVote: "",
      votePercent: [{ value: 10 }],
      range: [{ value: [0, 10] }],
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

  const isGovernance = prsalType === "governance";
  const isFixed = kpi === "fixed";

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
          name="snapshotProposal"
          control={control}
        />
        {isGovernance && (
          <FormSelect
            label="Desired Vote Outcome"
            placeholder="Choose desired vote outcome"
            items={[
              { value: 1, display: "Outcome 1" },
              { value: 2, display: "Outcome 2" },
            ]}
            name="desiredVote"
            control={control}
          />
        )}
        {!isGovernance && isFixed && (
          <FormSelect
            label="Select Gauge"
            placeholder="Choose gauge"
            items={[
              { value: 1, display: "Currency 1" },
              { value: 2, display: "Currency 2" },
            ]}
            name="gaugeFixed"
            control={control}
          />
        )}
        <FormSelect
          label="Reward Currency"
          placeholder="Choose your reward currency"
          items={[
            { value: 1, display: "Currency 1" },
            { value: 2, display: "Currency 2" },
          ]}
          name="rewardCurrency"
          control={control}
        />
        <FormTextField
          label="Minimum Bribe"
          name="minimumProposal"
          helpText="Enter minimum bribe value if applicable"
          control={control}
          rules={{
            required: {
              value: true,
              message: "You must enter minimum proposal.",
            },
          }}
          placeholder="Enter minimum bribe amount if applicable"
        />
      </BoxForm>

      <BoxForm className="flex flex-col p-20 rounded-md gap-8">
        {votePercentFields.map((vp, idx) => (
          <Box key={vp.id} className="flex flex-col gap-8">
            <FormSlider
              label="Vote %"
              name="votePercent"
              helpText="Select the vote% per which payment would be made, eg: 1%"
              control={control}
              index={idx}
              valueLabelFormat={(value: number) => `${value}%`}
            />
            <FormTextField
              label="Payout"
              name="payout"
              control={control}
              index={idx}
              placeholder="Enter payout in reward currency per vote percent selected above"
            />
            <FormRangeSlider
              label="Range"
              name="range"
              index={idx}
              control={control}
              helpText="Select the range that you want to incentivise. The upper range would be considered the target vote. Open ended bribes require an upper range of 100%"
            />
          </Box>
        ))}
        <FormSelect
          label="Sticky Vote"
          name="loyaltyVote"
          control={control}
          placeholder="Number of vote cylces to give payout. Max 4 cylces"
          items={[
            { value: 1, display: "1" },
            { value: 2, display: "2" },
            { value: 3, display: "3" },
            { value: 4, display: "4" },
          ]}
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
