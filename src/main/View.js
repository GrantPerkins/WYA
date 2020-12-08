import React, {Component} from "react";
import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
    Grid,
    IconButton,
    Toolbar,
    Tooltip,
    Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon from '@material-ui/icons/Help';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

import "./css/View.css";
import {Link} from "react-router-dom";

class View extends Component {
    render() {
        return (
            <div className={"View"}>
                <AppBar id={"MenuBar"} color={"secondary"}>
                    <Toolbar id={"toolbar"}>
                        <Grid container>
                            <Grid item xs={2}>
                                <IconButton><MenuIcon fontSize={"large"}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant={"h6"} style={{paddingTop:"12px"}}> The Epic Group </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton>
                                    {<GroupAddIcon fontSize={"large"}/>}
                                </IconButton>
                            </Grid>
                            <Grid item xs={2}>
                                <Tooltip title={"Green means your friend is free. Red means your friend is busy."}
                                         enterDelay={500} leaveDelay={200}>
                                    <IconButton>
                                        <HelpIcon fontSize={"large"}/>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>


                    </Toolbar>
                </AppBar>
                <div className={"ViewContent"}>
                    {this.props.viewContent}
                </div>
                <BottomNavigation>
                    <BottomNavigationAction
                        icon={this.props.leftIcon}
                        component={Link}
                        to={this.props.leftLink}
                    />
                    <BottomNavigationAction
                        icon={this.props.rightIcon}
                        component={Link}
                        to={this.props.rightLink}
                    />
                </BottomNavigation>
            </div>
        );
    }
}

export default View;