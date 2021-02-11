import makeStyles from '@material-ui/core/styles/makeStyles';
export default makeStyles( (theme) => ({
    root:{
        width: '100% !important',
        height: '93vh',
        padding: '0px 0px 269px 0px !important',
        borderRadius: 'unset !important',
		display: 'flex !important',
        objectFit: 'contain',
        backgroundSize: "cover",
        marginTop: '-47px  !important',
        margin: theme.spacing(0, 0),

                [theme.breakpoints.down('xs')]:{
                    width: '949px !important',
                    height: '93vh',
                    padding: '433px 0px 269px 0px !important',
                    display: 'flex !important',
                    objectFit: 'contain',
                    backgroundSize: "cover",
                },

                [theme.breakpoints.only('sm')]:{
        width: '100% !important',
        height: '93vh',
        padding: '297px 0px 269px 0px !important',
        borderRadius: 'unset !important',
		display: 'flex !important',
        objectFit: "contain",
        textAlign: "center",
        backgroundSize: "cover",
				margin: theme.spacing(0),

                },


				
		},

    paper:{
        display:'flex',
        width: ' 760px !important',
        objectFit: 'contain',
        float: 'right',
        backgroundSize: 'cover',
        height: '703px !important',  
        borderRadius: 'unset !important',
        padding: theme.spacing(0,0),

        [theme.breakpoints.down("xs")]: {
         display:'flex',
        width: ' 977px !important',
        objectFit: 'contain !important',
        backgroundSize: 'cover !important',
        height: '508px !important', 
        marginTop:'395px !important', 

        },
        [theme.breakpoints.only("sm")]: {
            width: '  1142px !important',
            marginLeft: '676px',
        },
       
    },
    paper2:{
        width: ' 760px !important',
        height:'703px !important',
       backgroundColor: '#323e47',
       borderRadius: 'unset !important',
       flost:'right',
       display:'flex',
       position: 'absolute',
       padding: theme.spacing(0),
       [theme.breakpoints.down("xs")]: {
        width: ' 975px !important',
        height: '682px !important',
        margin: '-287px 1px 0',
       },

       [theme.breakpoints.only("sm")]: {
        width: ' 1000px !important',
        padding:' 0px 0px 0px 0px',
    },
 
       
        

    },

    ContainerBidandText:{
        padding:'284PX 122px 10px',

        [theme.breakpoints.down("xs")]: {
        padding:' 144PX 227px 10px'
    },

        
       [theme.breakpoints.only("sm")]: {
        padding:'284PX 311px 10px'},
    
       

    },
    BidIcon:{
        width: '59px',
        height: '60px',
        padding:'0 231px 30px',
        objectFit: 'contain',
       
        
        

    },
  
    firsttext:{
        width: '495px',
        height: '39px',
        padding:'30px 13px 10px',
        fontFamily: 'inherit',
        fontSize: '27px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.63px',
        textAlign: 'center',
        color: '#ffffff',
        [theme.breakpoints.down("xs")]: {
            fontSize: '29px',
            padding:'30px 13px 10px',
            width: '529px',
            marginLeft: '-32px',

        },

    },
    Secondtext:{
        width: '521px',
  height: '26px',
  padding:  '10px 0 0',
  fontFamily: 'inherit',
  fontSize: '20px',
  fontWeight: '500',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '-0.42px',
  textAlign: 'center',
  color: '#ffffff',
  [theme.breakpoints.down("xs")]: {
    fontSize: '20px',
    width: '529px',
    marginLeft: '-32px',

},
    },
    containerSteps:{
        display:'flix',
        marginTop: '-14px'

    },
   
    containerTitle:{
        display:'flix',
		position: 'absolute',
        marginTop: '150px',
        marginLeft:'146px',
        marginRight: '159px',
        [theme.breakpoints.down("xs")]: {
            display:'flix',
            position: 'absolute',
            marginTop: '150px',
            marginLeft:'146px',
            marginRight: '159px',
        },
       

    },
    title:{
        width: '226px',
        height: '46px',
        margin: '0 88px 10px 0',
        fontFamily: 'sans-serif',
        fontSize: '35px',
        fontWeight: 'bold',
        letterSpacing: '-0.97px',
        color: '#ffffff',
    },
    Secondtitle:{
        width: '263pxpx',
        height: '24px',
        margin: '10px 0 0',
        fontFamily: 'inherit',
        fontSize: '17px',
        letterSpacing: '-0.5px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        color: '#ffffff',


    },
    StepOne:{
        
        fontStretch: 'normal',
        fontStyle: 'normal',
        textAlign: 'center',
        color: '#ffffff',
        marginTop: '275px',
        marginLeft: '210px',
    },
    textStepOne:{
        width: '110px',
        height: '21px',
        margin: '0 244px 8px 0',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: 'normal',
        letterSpacing: '-0.44px',
        textAlign: 'center',
       
    },
    textStep1:{
        width: '354px',
          height: '18px',
        margin: '8px 0 0',
        fontSize: '14px',
        fontWeight: 'normal',
       lineHeight: '1.29',
      letterSpacing: 'normal',
  
    },
    Steptwo:{
        
        // fontFamily: 'Roboto',
        fontStretch: 'normal',
        fontStyle: 'normal',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: '64px',
    marginLeft: '210px',

    },
    textSteptwo:{ 
        width: '187px',
        height: '21px',
        margin: '0 244px 8px 0',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: 'normal',
        letterSpacing: '-0.44px',
        textAlign: 'center',
        

    },
    textStep2:{
    width: '438px',
  height: '18px',
  margin: '8px 0 0',
  fontSize: '14px',
  fontWeight: 'normal',
  lineHeight: '1.29',
  letterSpacing: 'normal',
  
    },
    Stepthird:{
        fontStretch: 'normal',
        fontStyle: 'normal',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: '64px',
    marginLeft: '210px',

    },
    textStepthird:{
        width: '123px',
  height: '21px',
  margin:' 0 164px 8px 0',
  fontSize: '16px',
  fontWeight:' 500',
  lineHeight: 'normal',
  letterSpacing:' -0.44px',
    },
    textStep3:{
        width: '225px',
        height:' 36px',
        margin: '8px 0 0',
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '1.29',
        letterSpacing: 'normal',
    },
    textStepthird2:{
        width: '298px',
        height: '48px',
        margin: '-19px 0 0',
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '1.29',
        letterSpacing: 'normal',

    },
    NumberCircle1:{
      
  height: '51px',
  width: '51px',
  borderRadius: '67px',
  marginLeft: '-64px',
  bottom: '-47px',
  boxShadow: '20px 20px 60px 0 rgba(0, 0, 0, 0.4)',
  backgroundImage: 'linear-gradient(225deg, #ec1c24, #f91c3d)',
    },
    NumberCircle:{
      
        height: '51px',
        width: '51px',
        borderRadius: '67px',
        marginLeft: '-64px',
        boxShadow: '20px 20px 60px 0 rgba(0, 0, 0, 0.4)',
        backgroundImage: 'linear-gradient(225deg, #ec1c24, #f91c3d)',
          },
       
              containersteptwo:{
                marginTop: '-50px',
              },
              


            }),
            { index: 1 }
            );