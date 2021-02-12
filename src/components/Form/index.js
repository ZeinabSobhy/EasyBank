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
import { useMediaQuery } from "@material-ui/core";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { FormattedMessage, useIntl } from "react-intl";

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
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState(false);
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
  const handleChangeNumber = (event) => {
    const regExp = /[a-zA-Z]/g;
    regExp.test(event.target.value) ? setError(true) : setError(false);
  };
  const handleChangeName = (event) =>{
    const regex = /ab+c/;
    regex.test(event.target.value) ? setErrors(true) : setErrors(false);
  }
  // <VideoPlayer url={VIDEO} poster={poster} width={400} height={300} autoplay />;
  return (
    <Grid container item sm={isSmallScreen ? "6" : "12"}>
      <Grid
        component="main"
        className={classes.roott}
        item
        xs={isXSmallScreen ? "12" : "6"}
      >
        <Grid xs={12} className={classes.title}>
          <Typography className={classes.firstTitle}>    <FormattedMessage id="startToday.title" /> </Typography>
          <Typography className={classes.scondTitle}>
          <FormattedMessage id="startToday.subtitle" />
          </Typography>
        </Grid>

        <Grid sm={6} xs={12} className={classes.video}>
          <VideoPlayer url={VIDEO} poster={poster} borderRadius={15}  />
          <div className={classes.SellCar}>
           <Typography className={classes.sellcarwithus}>
           <FormattedMessage id="startToday.videoSection.first" />
           </Typography>
            <Typography className={classes.support}>
              {" "}
              <FormattedMessage id="startToday.videoSection.second" />{" "}
            </Typography>
            <Typography className={classes.process}>
            <FormattedMessage id="startToday.videoSection.third" />
            </Typography>
            <Typography className={classes.Ready}>
            <FormattedMessage id="startToday.videoSection.fourth" />
            </Typography>
          </div>
        </Grid>
        <Grid item sm={isSmallScreen ? "6" : "12"}>
          <Grid className={classes.paper} item xs={isXSmallScreen ? "12" : "6"}>
            <form className={classes.form} noValidate>
              <Typography className={classes.details}>
              <FormattedMessage id="startToday.formSection.headline" />
              </Typography>
              <FormControl className={classes.formControl}>
                <InputLabel><FormattedMessage id="startToday.formSection.firstLabel" /></InputLabel>
                <select
                className={classes.zeinab}
                  value={selectedMakeModels}
                  onChange={handleMenuItemClick}
                  placeholder={<FormattedMessage id="startToday.formSection.SelectBrand" />}
                >
                  {makes.map((MakeModels) => (
                    <option value={MakeModels}>{MakeModels}</option>
                  ))}
                </select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel><FormattedMessage id="startToday.formSection.secondLabel" /></InputLabel>

                <select
                  className={classes.zeinab}
                  value={selectedMakeModels}
                  onChange={handleSelectedMakeModels}
                //  placeholder= {<FormattedMessage id="startToday.formSection.headline" />}
                >
                  {filtered.map((Models) => (
                    <option value={Models}>{Models}</option>
                  ))}
                </select>
              </FormControl>

              <Typography className={classes.contactInfo}>
              <FormattedMessage id="startToday.formSection.headline2" />
              </Typography>

              <TextField
                error={errors}
                onChange={(x) => handleChangeName(x)}
                label= "Your Full Name"
                id="outlined-error-helper-text"
                placeholder="Your Full Name"
                margin="normal"
                required
                fullWidth
                type="text"
                // helperText="Incorrect entry Your Full Name"
                variant="outlined"
              />
              <TextField
                error={error}
                onChange={(e) => handleChangeNumber(e)}
                id="outlined-error-helper-text"
                label="Your Phone Number"
                placeholder="EX: +972 897 564 34"
                margin="normal"
                required
                fullWidth
                name="Number"
                // helperText="Incorrect entry Your Phone Number"
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                className={classes.submit}
              >
               <FormattedMessage id="startToday.formSection.sendBtn" />
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
