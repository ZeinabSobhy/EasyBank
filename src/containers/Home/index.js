import React from "react";
import Header from "../../components/header/index";
import makeStyles from "./style";
import { useTheme } from "@material-ui/core/styles";
import SellCar from "../../components/sellcar/index";
import { useMediaQuery} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import HowItWorks from '../../components/HowItWorks';
import Form from '../../components/Form/index';
import Services from '../../components//Services/index';
function Home() {
  const classes = makeStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <Grid   className={classes.homecontenir} style={{
            width: isSmallScreen && "100%",
            height: isSmallScreen && "591vh",
    }}>
      <Header />
        <SellCar />
        <HowItWorks/>
        <Form/>
        <Services/>
      
      
    </Grid>
  );
}

export default Home;
