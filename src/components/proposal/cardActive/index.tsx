import { Card } from "@mui/material";
import { useSelector } from "../../../redux/store";
import { ProposalCardHeader } from "../cardHeader";
import ProposalListCard from "./proposalList";

type Props = {};

const ProposalCardActive = (props: Props) => {
  const colHeads = ["Protocol", "Status", "Reward Accumulated", ""];

  const proposalState = useSelector(state => state.proposal);
  const { activeProposals } = proposalState;
  return (
    <Card className="">
      <ProposalCardHeader title="My active proposals"></ProposalCardHeader>
      <ProposalListCard proposals={activeProposals} heads={colHeads} />
    </Card>
  );
};

export { ProposalCardActive };
