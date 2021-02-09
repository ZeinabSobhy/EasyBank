import React, { useContext, useEffect, useState } from "react";
import makeStyles from "./Style";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { useMediaQuery, Button } from "@material-ui/core";
import IMGRED from "../../assets/images//red-bg.png";
import Paper from "@material-ui/core/Paper";
import BID_ICON from "../../assets/icons/bid-icon.png";
const HowItWorks = () => {
  const classes = makeStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
      <Grid className={classes.root} spacing={0}>
        {/* <Grid xs={12} sm={6}>
        <div
            className={classes.paper2}
            style={{
              backgroundColor: "#323e47",
              width: isSmallScreen && "760px",
              height: isSmallScreen && "703px",
            }}
          >
            <div   className={classes.containerSteps}>
              <dic  className={classes.containerTitle}>
              
                <Typography className={classes.title}>How it works?</Typography>
                <Typography className={classes.Secondtitle}>
                  Sell Your Car in Three Simple Steps
                </Typography>
              </dic>
              <div  >
                <div className={classes.StepOne}>
                  <Typography className={classes.textStepOne}>
                    Submit Your Car
                  </Typography>
                  <Typography className={classes.textStep1}>
                    Enter your car details for inspection on Emirates Auction.
                  </Typography>
                </div>
                <div  className={classes.Steptwo}>
                  <Typography className={classes.textSteptwo}>
                    Receive Valuation and Offer
                  </Typography>
                  <Typography className={classes.textStep2}>
                    We will check your car and provide you with approved
                    purchase price.
                  </Typography>
                </div>
                <div  className={classes.Stepthird}>
                  <Typography className={classes.textStepthird}>
                    Get Your Payment
                  </Typography>
                  <Typography className={classes.textStep3}>
                    After a price is agreed for your car, we will exchange cash
                    on a day that suits you.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        
        <Grid xs={12} sm={6}>
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
        </Grid> */}

      </Grid>
   
  );
};
export default HowItWorks;
