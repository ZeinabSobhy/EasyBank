import React, { useContext, useEffect, useState } from "react";
import makeStyles from "./style";
import { useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useMediaQuery, Button } from "@material-ui/core";
import SELLCAR from "../../assets/images//sellcar.png";
import HowItWorks from "../HowItWorks/index";
const SellCar = () => {
  const classes = makeStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
    <Grid container >
        <Grid item xs={12} sm={12} lg={12} className={classes.Continer}>
          <div
            className={classes.imgcontiner}
            style={{
              backgroundImage: `url(${SELLCAR})`,
              width: isSmallScreen && "100%",
              height: isSmallScreen && "78vh",
            }}
          >
            <Grid className={classes.TextContiner}>
              <div className={classes.FirstText}>SELLING YOUR CAR NOW</div>
              <div className={classes.SecondText}>IS EASIER THAN EVER.</div>
            </Grid>
          </div>
        </Grid>
     
    </Grid>
    </div>
    
  );
};
export default SellCar;
