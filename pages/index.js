import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Layout from "../components/layout";
import Visitordetails from "../components/visitordetails";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import io from "socket.io-client";
import {
  ThemeProvider,
  Message,
  MessageText,
  MessageList,
  MessageGroup,
} from "@livechat/ui-kit";

const styles = (theme) => ({
  inputField: {
    marginTop: theme.spacing(2),
  },
  root: {
  }
});

const theme = {
  vars: {
      'primary-color': '#427fe1',
      'secondary-color': '#fbfbfb',
      'tertiary-color': '#fff',
      'avatar-border-color': 'blue',
  },
  AgentBar: {
      Avatar: {
          size: '42px',
      },
      css: {
          backgroundColor: 'var(--secondary-color)',
          borderColor: 'var(--avatar-border-color)',
      }
  },
  MessageList: {
    css: {
      backgroundColor: '#dbd8ce',
      borderRadius: '10px'
    }
  }
}


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const socket = io(process.env.BACKEND_URL);
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
            <Container className={classes.root}>
              <ThemeProvider theme={theme}>
              <MessageList active>
                <MessageGroup
                  avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
                  onlyFirstWithMeta
                >
                  <Message authorName="Jon Smith" date="21:37">
                    <MessageText>Hey my friend!</MessageText>
                  </Message>
                  <Message authorName="Jon Smith" date="21:37">
                    <MessageText>Hi!</MessageText>
                  </Message>
                  <Message authorName="Jon Smith" date="21:37">
                    <MessageText>Hello, are you there?</MessageText>
                  </Message>
                </MessageGroup>
                <Message isOwn>
                  <MessageText>Hello! I am Jon!</MessageText>
                </Message>
              </MessageList>
              </ThemeProvider>
            </Container>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles)(IndexPage);
