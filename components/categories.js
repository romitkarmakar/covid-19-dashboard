import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["Visitor", "Doctor", "Medical Supplier"],
    };
  }

  render() {
    return (
      <Card>
        <CardHeader title="Choose your category" />
        <CardContent>
          <List>
            {this.state.categories.map((v) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary={v} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default Categories;
