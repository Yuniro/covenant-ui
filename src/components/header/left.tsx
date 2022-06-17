import React, { FC, FunctionComponent, SVGProps } from "react";
import { useParams, useLocation } from "react-router-dom";
import classNames from "classnames";
import { Box, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as GaugeIcon } from "../../assets/icons/gauge.svg";
import { ReactComponent as ProQidaoIcon } from "../../assets/icons/pro-qidao.svg";
import { ReactComponent as ProAaveIcon } from "../../assets/icons/pro-aave.svg";
import { ReactComponent as ProFraxIcon } from "../../assets/icons/pro-frax.svg";
import { EnumProtocolName } from "../../@types/protocol";
import styles from "./styles.module.scss";

type Props = {};

const HeaderLeft = (props: Props) => {
  const { symbol, protocol, prsalType, kpi, status } = useParams();
  const location = useLocation();

  const locationArr = location.pathname.split("/").filter(p => p.length);

  let title = "Dashboard";
  let subtitle = "";
  let TitleIcon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  > = GaugeIcon;

  if (symbol) {
    title = EnumProtocolName[symbol as keyof typeof EnumProtocolName];
    switch (title) {
      case EnumProtocolName.qidao:
        TitleIcon = ProQidaoIcon;
        break;
      case EnumProtocolName.aave:
        TitleIcon = ProAaveIcon;
        break;
      case EnumProtocolName.frax:
        TitleIcon = ProFraxIcon;
        break;
      case EnumProtocolName.olivedao:
        TitleIcon = ProAaveIcon;
        break;
      default:
        break;
    }
  }
  if (locationArr[0] === "proposal") {
    const isNew = locationArr[1] === "new";
    if (isNew) {
      title = "Create a proposal";
      subtitle =
        protocol && prsalType && kpi && status
          ? status === "confirm"
            ? "Proposal created successfully"
            : "Check your information is correct"
          : protocol && prsalType && kpi
          ? "Add information about your proposal"
          : protocol && prsalType
          ? "Select the KPI option to use for payout"
          : protocol
          ? "Create a gauge vote or governance proposal"
          : "Choose protocol to create proposal for";
    }
  }
  return (
    <Box className={classNames("flex items-center gap-4")}>
      <Box
        className={classNames(
          "flex items-center justify-center rounded-full w-24 h-24",
          styles.icon
        )}
      >
        <SvgIcon component={TitleIcon} viewBox="0 0 31 31" />
      </Box>
      <Box>
        <Typography variant="h3">{title}</Typography>
        {subtitle && <Typography variant="h6">{subtitle}</Typography>}
      </Box>
    </Box>
  );
};

export { HeaderLeft };
