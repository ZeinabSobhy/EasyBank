import React, { useEffect, useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import VideoPlayer from "react-simple-video-player";
import makeStyles from "./style";
import { useTheme } from "@material-ui/core/styles";
import VIDEO from "../../assets/vido/Emirates Auction.mp4";
import poster from "../../assets/images/poster.jpg";
import { DataContext } from "../../context/dataContext";
import { useMediaQuery} from "@material-ui/core";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

export default function Form() {
  const classes = makeStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("sm"));
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [MakeModels, SetMakeModels] = useContext(DataContext);
  const [Models, setModels] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [model, setModel] = useState([]);
  const [makes, setMakes] = useState([]);
  const [selectedMakeModels, setSelectedMakeModels] = useState();
  console.log(MakeModels);

  useEffect(() => {
    const edit_data = [];
    MakeModels?.map((d) => {
      edit_data.push(d?.Make);
    });
    setMakes(edit_data);
  }, [MakeModels]);

  const handleMenuItemClick = (event) => {
    //error

    setSelectedMakeModels(event.target.value);
    let filter = MakeModels.find((d) => d.Make === event.target.value);

    setFiltered(filter.Models);
  };
  const handleSelectedMakeModels = (event) => {
    console.log(event.target.value);
    setModels(event.target.value);
  };
  // <VideoPlayer url={VIDEO} poster={poster} width={400} height={300} autoplay />;
  return (
    <Grid container  item sm={isSmallScreen ? '6' : '12'} >
    <Grid  component="main" className={classes.root} item xs={isXSmallScreen ? '12' :'6'}>
      <Grid xs={12} className={classes.title}>
        <Typography className={classes.firstTitle}>Start today!</Typography>
        <Typography className={classes.scondTitle}>
          You are just one click away from selling your car.
        </Typography>
      </Grid>

      <Grid sm={6} xs={12} className={classes.video}>
        <VideoPlayer
        
          url={VIDEO}
          poster={poster}
           borderRadius = {15}
          width={560}
          height={300}
          autoplay
        />
      </Grid>
      <Grid sm={6} xs={12}>
        <div className={classes.paper}>
         
          <form className={classes.form} noValidate>
          <Typography className={classes.details}>
            Enter your car details
          </Typography>
            <FormControl className={classes.formControl}>
              <InputLabel>Car Make</InputLabel>
              <Select value={selectedMakeModels} onChange={handleMenuItemClick}>
                {makes.map((MakeModels) => (
                  <MenuItem value={MakeModels}>{MakeModels}</MenuItem>
                ))}
                
              </Select>
              
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>Car Model</InputLabel>
              
              <Select
                value={selectedMakeModels}
                onChange={handleSelectedMakeModels}
              >
                {filtered.map((Models) => (
                  <MenuItem value={Models}>{Models}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <Typography>Enter your Contact Info</Typography>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Your Full Name"
              label="Your Full Name"
              name="Your Full Name"
              
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
      </Grid>
    </Grid>
  );
}
