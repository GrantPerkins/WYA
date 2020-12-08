import React, {Component} from "react";
import logo from './assets/img/logo.png';
import "./css/Welcome.css";
import {Button, Grid, TextField} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";

class Login extends Component {


    render() {
        const ColorButton = withStyles((theme) => ({
            root: {
                color: theme.palette.getContrastText('#0cc948'),
                backgroundColor: '#0cc948',
                width: '250px',
                borderRadius: 16,
                fontWeight: "bold"
            },
        }))(Button);
        return (
            <div className={"Welcome"}>
                <img src={logo} className={"Media"} alt={"logo"}/>
                <div className={"Buttons"}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField label={"Email or Phone Number"} style={{width: "250px"}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label={"Password"} style={{width: "250px"}}/>
                        </Grid>
                    </Grid>
                </div>
                <div className={"Login"}>
                    <Link to={"/list"} style={{textDecoration:"none"}}>
                        <ColorButton size={"large"} variant={"contained"}>Login</ColorButton>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Login;