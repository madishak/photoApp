import React, { Component } from "react";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import  { AppBar } from '@material-ui/core';
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

class Header extends Component {

    render() {

        return (
              <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            PhotoApp
                        </Typography>
                    </Toolbar>
                </AppBar>

          );
    }
}

export default Header;
