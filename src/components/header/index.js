import React, { useContext, useEffect, useState } from "react";
import makeStyles from "./style";
import { useTheme } from "@material-ui/core/styles";
import LOGOEA from "../../assets/images/logo-ea.svg";
import { Grid, Typography } from "@material-ui/core";
import { useMediaQuery, Button } from "@material-ui/core";

const Header = () => {
  const classes = makeStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12} sm={12} lg={12}></Grid>
    <Grid  item xs={12} sm={12} lg={12} className={classes.HeaderContainer} 
     style={{
      
      width: isSmallScreen && "100%",
      height: isSmallScreen && "175px",
    }}>
    

      <div className={classes.logoea}>
        <img
          style={{
            cursor: "pointer",
            width: isSmallScreen && "242px",
            height: isSmallScreen && "75px",
          }}
          src={LOGOEA}
          alt="logo"
        />
      </div>

      <div>
        <Button 
         className={classes.btn}>
          <Typography className={classes.textbtn}>العربيه</Typography>
        </Button>
      </div>
    </Grid>
    </Grid>
    
    </div>
    
  );
};
export default Header;
