import { CardHeader } from "@mui/material";
import { styled } from "@mui/material/styles";
import classNames from "classnames";

type Props = { title: string; isCenter?: boolean };

const Header = styled(CardHeader)(({ theme }) => ({
  backgroundColor: theme.palette.third.main,
}));

const ProposalCardHeader = ({ title, isCenter }: Props) => {
  return (
    <Header
      className={classNames("px-2 py-2", isCenter && "text-center")}
      title={title}
      titleTypographyProps={{ variant: "h4" }}
    ></Header>
  );
};

ProposalCardHeader.defaultProps = {
  isCenter: false,
};

export { ProposalCardHeader };
