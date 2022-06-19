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
  const { PUBLIC_URL } = process.env;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("mlg"));

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

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.classList.toggle("is-active");
    document.body.classList.toggle("show-menu");
  };

  return (
    <Box
      className={classNames(
        "relative mlg:min-w-[70px]",
        styles.main,
        isMobile && styles.mainMobile
      )}
      component="aside"
    >
      <Box
        className={classNames(
          "flex h-24 items-center justify-between mlgx:w-full mlg:fixed mlg:h-screen mlg mlg:flex-col mlg:justify-start mlg:w-28 mlg:hover:w-[185px] mlg:items-start group",
          styles.mainInner
        )}
        component="section"
      >
        <Box>
          <Link
            href={PUBLIC_URL}
            className={classNames(
              "px-4 relative block mlg:!ml-8 mlg:px-0",
              styles.menuLogo
            )}
            underline="none"
          >
            <Typography variant="h3">C</Typography>
          </Link>
        </Box>
        <Typography className="mlg:hidden" variant="h4">
          Dashboard
        </Typography>
        <button
          className={classNames(
            "hamburger mlg:hidden hamburger--squeeze",
            styles.menuHamburger
          )}
          type="button"
          onClick={onButtonClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <Box
          className={classNames(
            "flex mlg:flex-col",
            styles.menu,
            isMobile && styles.menuMobile
          )}
        >
          {links.map((link, idx) => (
            <Link
              key={`lnk_${idx}`}
              href={link.href}
              className="py-4 flex mlg:!ml-8"
              underline="none"
            >
              <Box component="span" className={classNames("flex gap-2")}>
                <Box
                  component="span"
                  className={classNames(
                    "w-12 h-12 hidden mlg:flex items-center justify-center",
                    styles.menuIcon
                  )}
                >
                  <SvgIcon component={getIcon(link.icon)} viewBox="0 0 31 31" />
                </Box>
                <Typography
                  className={classNames(
                    "mlg:hidden mlg:group-hover:flex mlg:items-center",
                    styles.menuText
                  )}
                  variant="subtitle2"
                >
                  {link.text}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export { SidebarMenu };
