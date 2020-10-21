import React from "react";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid container>
          <Grid item sm>
            <InputBase></InputBase>
          </Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent="4" color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent="4" color="secondary">
                <ChatBubbleOutlineIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
