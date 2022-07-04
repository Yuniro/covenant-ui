import { Card } from "@mui/material";
import { useSelector } from "../../../redux/store";
import ProposalListCard from "../cardActive/proposalList";
import { ProposalCardHeader } from "../cardHeader";

type Props = {};

const ProposalCardCreated = (props: Props) => {
  const colHeads = ["Protocol", "Total Participants", "Total Votes Given", ""];

  const proposalState = useSelector(state => state.proposal);

  const { activeProposals } = proposalState;
  return (
    <Card className="">
      <ProposalCardHeader title="My created proposals"></ProposalCardHeader>
      <ProposalListCard proposals={activeProposals} heads={colHeads} />
    </Card>
  );
};

export { ProposalCardCreated };
