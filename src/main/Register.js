import React, {Component} from "react";
import logo from './assets/img/logo.png';
import {Button, Grid, TextField} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import "./css/Register.css";
import {Link} from "react-router-dom";

class Register extends Component {


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
                        <Grid item xs={12}>
                            <TextField label={"Confirm Pasword"} style={{width: "250px"}}/>
                        </Grid>
                    </Grid>
                </div>
                <div className={"Register"}>
                    <Link to={"/list"} style={{textDecoration:"none"}}>
                        <ColorButton size={"large"} variant={"contained"}>Register</ColorButton>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Register;