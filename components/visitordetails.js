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
import FormGroup from '@material-ui/core/FormGroup';

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
    };
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
                    onChange={(e) =>
                      this.setState({ bloodgroup: e.target.value })
                    }
                    className={classes.inputField}
                    margin="dense"
                  >
                    {this.state.bloodgroups.map((v) => (
                      <MenuItem value={v}>{v}</MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Typography className={classes.inputField}>
                Are you in quarentine ?
              </Typography>
              <Switch
                checked={this.state.quarentine}
                onChange={(e) =>
                  this.setState({ quarentine: e.target.checked })
                }
              />
              {this.state.quarentine ? (
                <TextField
                  label="Enter your Doctor's Name"
                  fullWidth
                  variant="outlined"
                  className={classes.inputField}
                />
              ) : null}
              <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedA"
                  />
                }
               
                label="Do you have any respisatory problem"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedA"
                  />
                }
                
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
