import { CardHeader } from "@mui/material";
import { styled } from "@mui/material/styles";
import classNames from "classnames";
import { colors } from "../../../common";

type Props = { title: string; isCenter?: boolean };

const Header = styled(CardHeader)(({ theme }) => ({
  background: `linear-gradient(90deg, ${colors.teal} 2%, ${colors.tealLight} 96%)`,
}));

const ProposalCardHeader = ({ title, isCenter }: Props) => {
  return (
    <Header
      className={classNames("px-2 py-2", isCenter && "text-center")}
      title={title}
      titleTypographyProps={{ variant: "caption" }}
    ></Header>
  );
};

ProposalCardHeader.defaultProps = {
  isCenter: false,
};

export { ProposalCardHeader };
