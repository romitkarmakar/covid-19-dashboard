import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Layout from "../components/layout";
import Visitordetails from "../components/visitordetails";
import Typography from "@material-ui/core/Typography";
import io from "socket.io-client";

const styles = (theme) => ({
  inputField: {
    marginTop: theme.spacing(2),
  },
});

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const socket = io("http://localhost:8000");
    socket.on("connect", function () {
      console.log("Connected");
    });

    socket.emit("message", "Event from client");
    socket.on("reply", function (msg) {
      console.log(msg);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} lg={6}>
            <Typography>Hello World</Typography>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles)(IndexPage);
