import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) => ({
  HeaderContainer: {
    // display: "flex",
    alignItems: "baseline",
    marginTop: "44px",
    width: "100%",
    height: "135px",
    [theme.breakpoints.down("xs")]: {
      display: "flex !important",
      // padding: '5px',
      marginTop: '1px',

    },
  },
  logoea: {
    width: "242px",
    height: "75px",
    margin: "0 280px 30px 140px",
    marginTop:'-14px',
    objectFit: "contain",
    marginLeft: "67px",

    
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "75px",
      margin: "-13 232px 50px 50px",
      objectFit: "contain",
      marginLeft: "64px",
    },
  },

  btn: {
    width: '108px !important',
    height: '48px !important',
    left: '83% !important',
    top: '13% !important',
    backgroundColor: '#ec1c24 !important',
    color: '#fff !important',
    borderRadius: '5px !important',
    display: "flex !important",
    fontStyle: 'normal !important',
		lineHeight: 'normal !important',
		letterSpacing: 'normal !important',
		textAlign: 'center !important',
    boxShadow: '0 2px 7px 0 rgba(255, 0, 0, 0.19)!important',
    '&:hover': {
      backgroundColor: '#ec1c24 !important',
      color: '#fff !important',
    },
      [theme.breakpoints.down("xs")]: {
      // width: "108px !important",
      // height: "48px !important",
      // display: "flex !important",
      backgroundColor: "#ec1c24 !important",
      left: "156% !important",
      // marginTop:'3px !important',
    },
  }
}));
