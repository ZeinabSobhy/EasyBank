import React, {  Suspense,  } from "react";
import { Route } from "react-router-dom";
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
        <Backdrop >
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
