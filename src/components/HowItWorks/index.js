import React from "react";
import makeStyles from "./Style";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { useMediaQuery, Button } from "@material-ui/core";
import IMGRED from "../../assets/images//red-bg.png";
import BID_ICON from "../../assets/icons/bid-icon.png";
import Avatar from '@material-ui/core/Avatar';

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
              
                <Typography className={classes.title}>How it works?</Typography>
                <Typography className={classes.Secondtitle}>
                  Sell Your Car in Three Simple Steps
                </Typography>
              </Grid>
              <div  >
              <div   className={classes.containerSteps}>

                <div className={classes.StepOne}>
                
                
          <Avatar className={classes. NumberCircle1}>
           <div>1</div>
          </Avatar>
        
                  <Typography className={classes.textStepOne}>
                    Submit Your Car
                  </Typography>
                  <Typography className={classes.textStep1}>
                    Enter your car details for inspection on Emirates Auction.
                  </Typography>
                </div>

                <div  className={classes.Steptwo}>
                
               <Avatar className={classes. NumberCircle}>
                <div>2</div>
                </Avatar>
        <div className={classes. containersteptwo}>
                  <Typography className={classes.textSteptwo}>
                    Receive Valuation and Offer
                  </Typography>
                  <Typography className={classes.textStep2}>
                    We will check your car and provide you with approved
                    purchase price.
                  </Typography>
                  </div>
                </div>
                <div  className={classes.Stepthird}>
               
          <Avatar className={classes. NumberCircle}>
           <div>3</div>
          </Avatar>
          <div className={classes. containersteptwo}>
       
                  <Typography className={classes.textStepthird}>
                    Get Your Payment
                  </Typography>
                  <Typography className={classes.textStep3}>
                    After a price is agreed for your car,
                     
                  </Typography>
                  <Typography className={classes.textStepthird2}>we will exchange cash
                    on a day that suits you.</Typography>
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
                  YOUR CAR WILL BE SOLD BY BIDDING
                </Typography>
                <Typography className={classes.Secondtext}>
                  You set the starting price it will be sold for the highest
                  bidder{" "}
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
