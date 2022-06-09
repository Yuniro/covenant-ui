import { Box, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate, useRoutes } from "react-router-dom";
import { Protocol } from "../../../../../@types/protocol";
import { ProposalCardHeader } from "../../../../../components";

type Props = {
  title: string;
  slug: string;
};

const Content = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.gray.main,
}));

const ProposalNewCard = ({ title, slug }: Props) => {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate(slug);
  };
  return (
    <Card className="cursor-pointer" onClick={onClickNavigate}>
      <ProposalCardHeader title={title} isCenter />
      <Content className="h-60"></Content>
    </Card>
  );
};

export { ProposalNewCard };
