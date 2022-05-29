import classNames from "classnames";
import { Box, Link, Typography, SvgIcon } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MenuLink } from "../../@types";
import { ReactComponent as GaugeIcon } from "../../assets/icons/gauge.svg";
import { ReactComponent as ProjectIcon } from "../../assets/icons/project.svg";
import { ReactComponent as LiquidityIcon } from "../../assets/icons/liquidity.svg";
import { ReactComponent as ChartIcon } from "../../assets/icons/chart.svg";
import { ReactComponent as ProAvaeIcon } from "../../assets/icons/pro-aave.svg";
import { ReactComponent as ProQiIcon } from "../../assets/icons/pro-qidao.svg";
import { ReactComponent as ProFraxIcon } from "../../assets/icons/pro-frax.svg";
import styles from "./styles.module.scss";

type Props = {};

const SidebarMenu = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("mlg"));

  const getIcon = (
    iconName: string
  ): React.FC<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  > => {
    switch (iconName) {
      case "gauge":
        return GaugeIcon;
      case "liquidty":
        return LiquidityIcon;
      case "chart":
        return ChartIcon;
      case "pro-aave":
        return ProAvaeIcon;
      case "pro-frax":
        return ProFraxIcon;
      case "pro-qidao":
        return ProQiIcon;

      default:
        break;
    }
    return () => <svg></svg>;
  };

  const links: MenuLink[] = [
    {
      icon: "gauge",
      text: "Dashboard",
      href: "/",
      separator: true,
    },
    {
      icon: "pro-qidao",
      text: "QiDAO",
      href: "/proposal/qidao",
    },
    {
      icon: "pro-frax",
      text: "Frax",
      href: "/proposal/frax",
    },
    {
      icon: "pro-aave",
      text: "Aave",
      href: "/proposal/aave",
    },
    {
      icon: "pro-aave",
      text: "OliveDAO",
      href: "/proposal/olivedao",
      separator: true,
    },
    {
      icon: "liquidty",
      text: "Liquidity Mining",
      href: "/liquidity-mining",
      separator: true,
      disabled: true,
    },
    {
      icon: "chart",
      text: "Analytics",
      href: "/analytics",
    },
  ];

  return (
    <Box
      className={classNames(
        "hidden mlg:flex p-10",
        styles.main,
        matches && styles.mainMobile,
        "flex",
        "flex-col"
      )}
      component="aside"
    >
      {links.map((link, idx) => (
        <Link
          key={`lnk_${idx}`}
          href={link.href}
          className="py-4 flex"
          underline="none"
        >
          <Box component="span" className={classNames("flex gap-2")}>
            <Box
              component="span"
              className={classNames(
                "w-12 h-12 flex items-center justify-center",
                styles.menuIcon
              )}
            >
              <SvgIcon component={getIcon(link.icon)} viewBox="0 0 31 31" />
            </Box>
            <Typography className={classNames(styles.menuText)}>
              {link.text}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export { SidebarMenu };
