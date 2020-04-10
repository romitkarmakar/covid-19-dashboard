import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import InputAdornment from "@material-ui/core/InputAdornment";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import ReactMapGL, { Marker } from "react-map-gl";
import LocationOn from "@material-ui/icons/LocationOn";

const styles = (theme) => ({
  inputField: {
    marginTop: theme.spacing(2),
  },
});

class VisitorDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      quarentine: false,
      bloodgroups: ["O+", "B+", "A+", "AB+", "O-", "B-", "A-", "AB-"],
      bloodgroup: "O+",
      viewport: {
        width: "100%",
        height: "500px",
        latitude: 41.5868,
        longitude: -93.625,
        zoom: 13,
      },
      marker: {
        latitude: 41.5868,
        longitude: -93.625,
      },
    };

    this.showPosition = this.showPosition.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    this.setState((state, props) => ({
      viewport: Object.assign(state.viewport, {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }),
      marker: Object.assign(state.marker, {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        draggable: true,
        onDrag: this.handleClick,
      }),
    }));
  }

  handleClick(e) {
    this.setState((state, props) => ({
      marker: Object.assign(state.marker, {
        latitude: e.lngLat[1],
        longitude: e.lngLat[0],
      }),
    }));
  }

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader title="Enter your details" />
        <CardContent>
          <TextField
            label="Enter your Name"
            fullWidth
            variant="outlined"
            className={classes.inputField}
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">@</InputAdornment>
              ),
            }}
            label="Enter your Email"
            type="email"
            fullWidth
            variant="outlined"
            className={classes.inputField}
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
            label="Enter your Phone Number"
            type="phone"
            fullWidth
            variant="outlined"
            className={classes.inputField}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                type="number"
                label="Enter your Age"
                variant="outlined"
                margin="dense"
                fullWidth
                className={classes.inputField}
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                variant="outlined"
                fullWidth
                value={this.state.bloodgroup}
                onChange={(e) => this.setState({ bloodgroup: e.target.value })}
                className={classes.inputField}
                margin="dense"
              >
                {this.state.bloodgroups.map((v) => (
                  <MenuItem value={v} key={v}>{v}</MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Typography className={classes.inputField}>
            Are you in quarentine ?
          </Typography>
          <Switch
            checked={this.state.quarentine}
            onChange={(e) => this.setState({ quarentine: e.target.checked })}
          />
          {this.state.quarentine ? (
            <TextField
              label="Enter your Doctor's Name"
              fullWidth
              variant="outlined"
              className={classes.inputField}
            />
          ) : null}
          <Typography>Select your location (Drag the pointer to mark your location)</Typography>
          <ReactMapGL
            onClick={(e) => this.handleClick(e)}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken="pk.eyJ1Ijoicm9taXRrYXJtYWthciIsImEiOiJjandnZDB3OGwxczV4NDBtZ2l0YTJ5aGVsIn0.w0b86s6XC_CFVG726Zwjrw"
            onViewportChange={(viewport) => this.setState({ viewport })}
            {...this.state.viewport}
          >
            <Marker {...this.state.marker}>
              <LocationOn fontSize="large" color="primary" />
            </Marker>
          </ReactMapGL>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="Do you have any respisatory problem"
            />
            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="Do you have any liver infection"
            />
          </FormGroup>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained">
            Submit
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(VisitorDetails);
