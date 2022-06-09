import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { BreadCrumb } from "./breadCrumb";

type Props = {};

const PageHeader = (props: Props) => {
  const { protocol } = useParams();
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  return protocol ? (
    <Box className="flex justify-between">
      <Typography className="underline cursor-pointer" onClick={onGoBack}>
        Back
      </Typography>
      <BreadCrumb></BreadCrumb>
    </Box>
  ) : <Box className="flex h-10"></Box>;
};

export { PageHeader };
