import React, { useContext, useEffect, useState } from "react";
import makeStyles from "./style";
import { useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useMediaQuery, Button } from "@material-ui/core";
import SELLCAR from "../../assets/images//sellcar.png";
import HowItWorks from "../HowItWorks/index";
import { FormattedMessage } from "react-intl";
const SellCar = () => {
  const classes = makeStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  
  return (
    <div className={classes.root}>
    <Grid container item sm={isSmallScreen ? '12' : '12'}>
        <Grid  className={classes.Continer} item xs={isXSmallScreen ? '12' :'12'}>
          <div
            className={classes.imgcontiner}
            style={{
              backgroundImage: `url(${SELLCAR})`,
              width: isSmallScreen && "100%",
              height: isSmallScreen && "78vh",
            }}
          >
            <Grid className={classes.TextContiner}>
              <div className={classes.FirstText}> <FormattedMessage id="background.title" /></div>
              <div className={classes.SecondText}><FormattedMessage id="background.subtitle" /></div>
            </Grid>
          </div>
        </Grid>
     
    </Grid>
    </div>
    
  );
};
export default SellCar;
