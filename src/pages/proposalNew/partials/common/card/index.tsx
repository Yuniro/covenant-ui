import { Box, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Protocol } from "../../../../../@types/protocol";
import { ProposalCardHeader } from "../../../../../components";

type Props = {
  title: string;
};

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
}));

const ProposalNewCard = ({ title }: Props) => {
  return (
    <Card className="cursor-pointer">
      <ProposalCardHeader title={title} isCenter />
      <Content className="h-60"></Content>
    </Card>
  );
};

export { ProposalNewCard };
