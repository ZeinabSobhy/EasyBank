import makeStyles from "@material-ui/core/styles/makeStyles";
export default makeStyles((theme) => ({
  Continer: {
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#ffffff",
    height: "80vh",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "flex !important",
    },
    [theme.breakpoints.only("sm")]: {
      height: "80vh",
      // width: "115%",
      
    },
  },
  imgcontiner: {
    display: "flex",
    objectFit: "contain",
    textAlign: "center",
    margin: "0 0 23px",
    padding: "430px 604px 72px 526px",
    marginTop: "-41px",
    backgroundSize: "cover",

    [theme.breakpoints.down("xs")]: {
      width: "792px !important",
      marginTop:'-32px',
      margin: "0 -430px 3px",
      padding: "23px 402px 173px 244px",
      objectFit: "contain",
      backgroundSize: "cover",
      textAlign: "center",
    },
    [theme.breakpoints.only("sm")]: {
      display: "flex",
      margin: "0 0 23px",
    padding: "247px 604px 72px 638px",
    marginTop: "-41px",
   

    },
  },
  TextContiner: {
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "505px !important",
      marginLeft: "402px !important",
    },
  },
  FirstText: {
    whiteSpace: "nowrap",
    width: "389px !important",
    height: "46px",
    margin: "0 0 10px",
    fontFamily: "inherit !important",
    fontSize: "33px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "-0.73px",
    textAlign: "center",
    color: "#ffffff",
    [theme.breakpoints.down("xs")]: {
      width: "389px",
      height: "46px",
      margin: "0 0 10px",
      fontFamily: "inherit !important",
      fontSize: "35px",
      fontWeight: "bold",
      letterSpacing: "-1.73px",
    },
  },
  SecondText: {
    width: "250px",
    height: "33px",
    margin: "10px 70px 0 69px",
    fontFamily: "inherit",
    fontSize: "23px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "-0.52px",
    textAlign: "center",
    color: "#ffffff",
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
      margin: "10px 70px 0 61px",
    },
  },
}),
{ index: 1 }
);
