import React, { lazy, Suspense,  } from "react";
import { Route, Switch } from "react-router-dom";
import useStyles from "../App/Style";
import { useIntl } from "react-intl";
import Home from "../Home/index";

import { Backdrop, CircularProgress } from "@material-ui/core";

const App = () => {
  const classes = useStyles();
  const locale = useIntl().locale;
  return (
      
    <Suspense
      fallback={
        <Backdrop className={classes.backdrop} open>
          <CircularProgress />
        </Backdrop>
      }
    >
      <switch> 
          
        <Route exact path="/" component={Home} />
      </switch>
    </Suspense>
   
  );
};
export default App;
