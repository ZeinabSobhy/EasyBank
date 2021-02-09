import makeStyles from '@material-ui/core/styles/makeStyles';
export default makeStyles((theme) => ({
    root: {
      height: '100vh',
      marginTop: '835px',
      display:'flix',
		position: 'absolute',
      
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
       padding: '30px 0px 100px 153px',
       paddingTop: '0px',


       [theme.breakpoints.down("xs")]: {
        width: '560px',
        height: '330px',
        margin: '1026px 0 50px',
        padding: '140px 255px',
        mixBlendMode: 'hard-light',
        position:'absolute',
       },


    },
    paper: {
      margin: theme.spacing(8, 4),
      float: 'right',
      flexDirection: 'column',
      alignItems: 'center',
    },
    details:{
        width: '156px',
        height: '26px',
        marginTop: '-3px',
       
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.71px',
        color:' #595f6f',
     

    },
   
  
    form: {
      width: '510px', 
      position: 'absolute',
      marginTop: '-473px',
      paddingLeft: '112px',
      

    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      display: 'flex',
      variant:"outlined",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  