import makeStyles from '@material-ui/core/styles/makeStyles';
export default makeStyles((theme) => ({
    root:{
        width: '100% !important',
        height: '648px !important',
        backgroundColor:' #f6fbff',
        marginTop:' 226px',
        [theme.breakpoints.down("xs")]: {
            display: 'flex',
            width: '1006px!important',
            height: '1550px!important',
            marginTop: '1167px!important',
           backgroundColor:' #f6fbff',
        },
        [theme.breakpoints.only("sm")]: {
            display: 'flex',
            width: '2006px!important',
            height: '709px !important',
            marginTop: '298px!important',
           backgroundColor:' #f6fbff',
        },


    },

    continer:{
     
        marginTop:'-91px',
        padding: '0 0 0 163px',
        display: 'flex !important',
        objectFit: 'contain !important',
        backgroundSize: "cover !important",

        [theme.breakpoints.down("xs")]: {
            display: 'block!important',
        objectFit: 'contain !important',
        backgroundSize: "cover !important",
        // padding: '0 0 0 163px',
        
        },
        [theme.breakpoints.only("sm")]: {
            marginTop:'-142px',
            padding: '0 0 0 429px',
            display: 'flex !important',
            objectFit: 'contain !important',
            backgroundSize: "cover !important",
        },
        
    },

    title:{
        
        width: '337px',
        padding: '150px 0 0 453px',

        [theme.breakpoints.down("xs")]: {
            padding: '150px 0 0 219px'
        },
        [theme.breakpoints.only("sm")]: {
            width: '337px',
            padding: '150px 0 0 734px',
        },
        
        

    },
    firstTitle:{
        width: '360px',
  height: '46px',
  margin: '0 99px 10px',
  fontFamily: 'inherit',
  fontSize: '35px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '-0.73px',
  textAlign:' center',
  color:' #000000',

    },
    scondTitle:{
        width: '535px',
        height: '56px',
        margin: '10px 0 0',
        fontFamily: 'inherit',
        fontSize: '17px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle:' normal',
        lineHeight: '1.56',
        letterSpacing: '-0.45px',
        textAlign:' center',
        color: '#595f6f',

    },
    DedicatedTeam:{
        width: '215px',
        height: '133px',
        margin: ' 0 40px',
        padding: '50px 50px 32px 59px',
  borderRadius: '5px',
  border:' solid 1px #dddfe7',
  backgroundColor: '#ffffff',
  
  [theme.breakpoints.down("xs")]: {
    width: '560px',
  height: '189px',
  margin: '0 0 30px',
  padding: '50px 85px',
  borderRadius: '5px',
  border: 'solid 1px #dddfe7',
  backgroundcolor:' #ffffff',


},

    },
    textone:{
        marginLeft:' 46px',
        marginTop:"-142px",

        [theme.breakpoints.down("xs")]: {
            
            marginTop:"23px",
        }
        
      
    },


    documentIcon:{
        width: '40px',
        height: '50px',
        margin: '15px 40px 55px -28px !important',
        objectFit:' contain',
        padding: '0px 0 0 0', 
        [theme.breakpoints.down("xs")]: {
            width: '40px',
            height: '50px',
            margin: '0 224px 10px !important',
            objectFit: 'contain',
     
        }

    },
    titleEasy:{
        width: '180px',
        height: '24px',
        margin: '0 0 15px',
        fontFamily:'inherit',
        fontSize: '17px',
        fontWeight: '500',
        letterSpacing: '-0.5px',
        color:' #595f6f',
        [theme.breakpoints.down("xs")]: {
            width: '180px',
            height: '24px',
            margin: '0 105px 10px;',
            fontFamily:'inherit',
            fontSize: '17px',
            fontWeight: '500',
            letterSpacing: '-0.5px',
        color:' #595f6f',
           
            textAlign: 'center',
            
        },
        
    },
    texthelp:{
        width: '180px',
  height: '108px',
  margin: '-5px 0 0',
  fontFamily:'inherit',
  fontSize: '14px',
  fontWeight: 'normal',
 
  lineHeight: '1.29',
  letterSpacing: 'normal',
  color: '#595f6f',
  [theme.breakpoints.down("xs")]: {
    width:' 390px',
    height: '54px',
    margin: '10px 0 0',
    fontFamily:'inherit',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle:' normal',
    lineHeight: '1.29',
    letterSpacing: 'normal',
    textAlign:' center',
    color:' #595f6f',

}

    },


    texttwo:{
        marginLeft:' 46px',
        marginTop:"-142px",
        [theme.breakpoints.down("xs")]: {
            
            marginTop:"23px",
        }

    },
    startIcon:{
        width: '40px',
        height: '50px',
        margin: '15px 40px 55px -28px !important',
        objectFit:' contain',
        padding: '0px 0 0 0',
        [theme.breakpoints.down("xs")]: {
            width: '40px',
            height: '50px',
            margin: '0 224px 10px !important',
            objectFit: 'contain',
     
        }

    },
    titleBest:{
        width: '180px',
        height: '24px',
        margin: '0 0 15px',
        fontFamily:'inherit',
        fontSize: '17px',
        fontWeight: '500',
        letterSpacing: '-0.5px',
        color:' #595f6f',
        [theme.breakpoints.down("xs")]: {
            width: '180px',
            height: '24px',
            margin: '0 105px 10px;',
            fontFamily:'inherit',
            fontSize: '17px',
            fontWeight: '500',
            letterSpacing: '-0.5px',
        color:' #595f6f',
           
            textAlign: 'center',
            
        },

    },
    textBestReturn:{
        width: '180px',
  height: '108px',
  margin: '-5px 0 0',
  fontFamily:'inherit',
  fontSize: '14px',
  fontWeight: 'normal',
 
  lineHeight: '1.29',
  letterSpacing: 'normal',
  color: '#595f6f',
  [theme.breakpoints.down("xs")]: {
    width:' 390px',
    height: '54px',
    margin: '10px 0 0',
    fontFamily:'inherit',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle:' normal',
    lineHeight: '1.29',
    letterSpacing: 'normal',
    textAlign:' center',
    color:' #595f6f',

}

    },


    BestReturn:{
        width: '215px',
        height: '133px',
        margin: ' 0 40px',
        padding: '50px 50px 32px 59px',
  borderRadius: '5px',
  border:' solid 1px #dddfe7',
  backgroundColor: '#ffffff',
  [theme.breakpoints.down("xs")]: {
    width: '560px',
  height: '189px',
  margin: '0 0 30px',
  padding: '50px 85px',
  borderRadius: '5px',
  border: 'solid 1px #dddfe7',
  backgroundcolor:' #ffffff',


},

    },
    help:{
        width: '215px',
        height: '133px',
        margin: ' 0 40px',
        padding: '50px 50px 32px 59px',
  borderRadius: '5px',
  border:' solid 1px #dddfe7',
  backgroundColor: '#ffffff', 
  [theme.breakpoints.down("xs")]: {
    width: '560px',
  height: '189px',
  margin: '0 0 30px',
  padding: '50px 85px',
  borderRadius: '5px',
  border: 'solid 1px #dddfe7',
  backgroundcolor:' #ffffff',


},
    }





}),
{ index: 1 }
);