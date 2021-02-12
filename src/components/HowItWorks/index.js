import React from "react";
import makeStyles from "./Style";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { useMediaQuery, Button } from "@material-ui/core";
import IMGRED from "../../assets/images//red-bg.png";
import BID_ICON from "../../assets/icons/bid-icon.png";
import Avatar from '@material-ui/core/Avatar';
import { FormattedMessage } from "react-intl";

const HowItWorks = () => {
  const classes = makeStyles();
  const theme = useTheme();
  const [spacing, setSpacing] = React.useState(0);
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("sm"));
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid className={classes.root}>
  <Grid container  item sm={isSmallScreen ? '6' : '12'} spacing={0} >
    <Grid   item xs={isXSmallScreen ? '12' :'6'} >  
      <Grid item xs={12} sm={6} lg={6} direction="column" container >
      
        <div
            className={classes.paper2}
            style={{
              backgroundColor: "#323e47",
              width: isSmallScreen && "760px",
              height: isSmallScreen && "703px",
            }}
          > 
         
              <Grid item xs={12} sm={6} lg={6} className={classes.containerTitle}>
              
                <Typography className={classes.title}>
                <FormattedMessage id="howItWorks.title" /></Typography>
                <Typography className={classes.Secondtitle}>
                <FormattedMessage id="howItWorks.subtitle" />
                </Typography>
              </Grid>
              <div  >
              <div   className={classes.containerSteps}>

                <div className={classes.StepOne}>
                
                
          <Avatar className={classes. NumberCircle1}>
           <div>1</div>
          </Avatar>
        
                  <Typography className={classes.textStepOne}>
                  <FormattedMessage id="howItWorks.firstPoint.title" />  
                  </Typography>
                  <Typography className={classes.textStep1}>
                  <FormattedMessage id="howItWorks.firstPoint.subtitle" />  
                  </Typography>
                </div>

                <div  className={classes.Steptwo}>
                
               <Avatar className={classes. NumberCircle}>
                <div>2</div>
                </Avatar>
        <div className={classes. containersteptwo}>
                  <Typography className={classes.textSteptwo}>
                  <FormattedMessage id="howItWorks.secondPoint.title" />  
                  </Typography>
                  <Typography className={classes.textStep2}>
                  <FormattedMessage id="howItWorks.secondPoint.subtitle" /> 
                  </Typography>
                  </div>
                </div>
                <div  className={classes.Stepthird}>
               
          <Avatar className={classes. NumberCircle}>
           <div>3</div>
          </Avatar>
          <div className={classes. containersteptwo}>
       
                  <Typography className={classes.textStepthird}>
                  <FormattedMessage id="howItWorks.thirdPoint.title" />
                  </Typography>
                  <Typography className={classes.textStep3}>
                  <FormattedMessage id="howItWorks.thirdPoint.subtitle" />
                     
                  </Typography>
                  <Typography className={classes.textStepthird2}>
                  <FormattedMessage id="howItWorks.thirdPoint.subtitle2" /></Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </Grid>
        </Grid>
        
        <Grid xs={12} sm={6} lg={6} spacing={0}>
          <Grid direction="column" container>
        
        
        <div 
            className={classes.paper}
            style={{
              backgroundImage: `url(${IMGRED})`,
              width: isSmallScreen && "760px",
              height: isSmallScreen && "703px",
            }}
          >
            <div className={classes.ContainerBidandText}>
              <div className={classes.BidIcon}>
                <img
                  style={{
                    width: isSmallScreen && "59px",
                    height: isSmallScreen && "60px",
                  }}
                  src={BID_ICON}
                  alt="BidIcon"
                />
              </div>
              <Typography className={classes.containerText}>
                <Typography className={classes.firsttext}>
                <FormattedMessage id="bidding.title" />
                </Typography>
                <Typography className={classes.Secondtext}>
                <FormattedMessage id="bidding.subtitle" />{" "}
                </Typography>
              </Typography>
            </div>
            
          </div>
         
          
        </Grid>
        </Grid>
        
      
      </Grid>
      
      
      </Grid>
   
  );
};
export default HowItWorks;
