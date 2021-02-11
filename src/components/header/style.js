import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles(
  (theme) => ({
    HeaderContainer: {
      alignItems: "baseline !important",
      marginTop: "44px",
      width: "100%",
      height: "135px",

      [theme.breakpoints.down("xs")]: {
        marginTop: "0px",
      },
      [theme.breakpoints.only("sm")]: {
        marginTop: "46px",
      },
    },
    logoea: {
      width: "242px",
      height: "75px",
      objectFit: "contain",
      display: "flex !important",
      marginTop: "-10px",
      padding: " 0px 0px 0 140px !important",

      [theme.breakpoints.down("xs")]: {
        width: "300px",
        height: "75px",
        objectFit: "contain",
        marginLeft: "-79px",
      },
    
    },

    btn: {
      width: "108px !important",
      height: "48px !important",
      left: "83% !important",
      top: "21% !important",
      backgroundColor: "#ec1c24 !important",
      color: "#fff !important",
      borderRadius: "5px !important",
      marginTop: "-76px !important",
      fontStyle: "normal !important",
      lineHeight: "normal !important",
      letterSpacing: "normal !important",
      textAlign: "center !important",
      boxShadow: "0 2px 7px 0 rgba(255, 0, 0, 0.19)!important",
      "&:hover": {
        backgroundColor: "#ec1c24 !important",
        color: "#fff !important",
      },
      [theme.breakpoints.down("xs")]: {
        backgroundColor: "#ec1c24 !important",
        left: "213% !important",
      },
      [theme.breakpoints.only("sm")]: {
        marginLeft: '1006px',
      },
    },
  }),
  { index: 1 }
);
