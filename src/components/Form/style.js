import makeStyles from '@material-ui/core/styles/makeStyles';
export default makeStyles((theme) => ({
    roott: {
      height: '100vh !important',
      padding: '0px 0 0 0px !important',
      marginTop: '-251px',
      display:'flix !important',
      objectFit: "contain",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      width:'100%',
    },
    title:{
      [theme.breakpoints.down("xs")]: {
   
        marginLeft: '-214px',
        padding:' 50px 0 0 0',
       },

    },

    firstTitle:{
 width: '175px',
  height: '46px',
  marginTop: '137px',
    marginLeft: '633px',
  fontFamily: 'initial',
  fontSize: '35px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight:' normal',
  letterSpacing: '-0.73px',
  textAlign: 'center',
  color: '#000000',
  [theme.breakpoints.down("xs")]: {
  //   width: '175px',
  // height: '46px',
  padding:'210px 0 0 0px',
  // margin: '0 95px 10px;',
  fontFamily: 'initial',
  fontSize: '35px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight:' normal',
  letterSpacing: '-0.73px',
  textAlign: 'center !important',
  color: '#000000',
        
      },

    },
    scondTitle:{
        width: '365px',
  height:' 28px',
  margin: '10px 388px 50px 554px',
  fontFamily: 'initial',
  fontSize: '18px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.56',
  letterSpacing: '-0.45px',
  textAlign: 'center',
  color: '#595f6f',

    },
    continerVideoForm:{
        marginTop: '284px',
        position: 'absolute',
        margin: theme.spacing(10),

    },
    video: {
      backgroundColor: '#ffffff',
       padding: '0 0px 73px 133px',
       paddingTop: '0px',
       width:' 560px',
       height: '330px',
    
       [theme.breakpoints.down("xs")]: {
        width: '560px',
        height: '780px',
        padding: '4px 194px',
        
        
       },
    },
      zeinab:{
        width: '460px',
        height: '50px',
        margin: '49px 0 0',
        padding: '15px 33px 14px 30px',
        borderRadius: '5px',
        border: 'solid 1px #bfc4ce',
        backgroundColor: '#ffffff',
       },
    sellcarwithus:{
      width: '458px',
      height: '37px',
      margin: '40px 56px 10px 0',
      fontFamily: 'systemUi',
      fontSize: '26px',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle:' normal',
      lineHeight: 'normal',
      letterSpacing: '-0.58px',
      color:' #000000',

     },
     support:{
      width: '272px',
      height: '24px',
      margin: '10px 233px 30px 0',
      fontFamily:' Roboto',
      fontSize: '18px',
      fontweight: '500',
      fontStretch: 'normal',
      fontStyle:' normal',
      lineHeight: 'normal',
      letterSpacing:' -0.37px',
      color: '#595f6f',

     },
     process:{
      width: '505px',
      height: '42px',
      margin: '-3 0 20px',
      fontFamily:' Roboto',
      fontweight: '16px',
      fontweight: 'normal',
      fontStretch: 'normal',
      fontStyle:' normal',
      lineHeight: 'normal',
      letterSpacing:' -0.33px',
      color: '#595f6f',

     },
     Ready:{
      width: '154px',
      height: '21px',
      margin: '20px 351px 0 0',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: '500',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: '-0.33px',
      color: '#595f6f',
     },

    paper: {
      margin: theme.spacing(8, 4),
      float: 'right',
      flexDirection: 'column',
      alignItems: 'center',
    },
    details:{
        width: '156px !important',
        height: '26px !important',
        marginTop: '-3px!important',
        fontFamily: 'Roboto',
        fontSize: '20px !important',
        fontWeight: '500 !important',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.71px',
        color:' #595f6f !important',
    },
    contactInfo:{
      width:' 231px',
  height:' 26px',
  margin: '30px 229px 30px 0',
  fontFamily: 'fangsong',
  fontSize: '20px',
  fontWeight:' 500',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  // letterSpacing: '-0.71px',
  color: '#595f6f',

    },
   
  
    form: {
      width: '510px', 
     
      marginTop: '-473px',
      paddingLeft: '532px',
      

    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      display: 'flex',
      variant:"outlined",
    },
    submit: {
      width:' 203px',
      height: '50px',
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#ec1c24 !important",
      color: "#fff !important",
      boxShadow: "0 2px 7px 0 rgba(255, 0, 0, 0.19)!important",
      "&:hover": {
        backgroundColor: "#ec1c24 !important",
        color: "#fff !important"}
    },
  }));
  