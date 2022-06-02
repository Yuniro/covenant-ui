import { Box } from "@mui/material";
import { CardRewards, ProposalCardActive } from "../../components";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <Box className="main-body flex flex-col grow">
      <Box className="flex flex-col min-h-full main-content gap-14">
        <CardRewards />
        <ProposalCardActive />
      </Box>
    </Box>
  );
};

export default Homepage;
