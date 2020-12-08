import React, {Component} from "react";
import {AppBar, Button, Grid, IconButton, TextField, Toolbar, Typography} from "@material-ui/core";

import {Link, withRouter} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';

import "./css/View.css";
import "./css/DirectMessage.css";
import nathan from "./assets/img/Nathan.png";
import grant from "./assets/img/Grant.png";
import monique from "./assets/img/Monique.png";
import james from "./assets/img/James.png";
import tyrone from "./assets/img/Tyrone.png";
import helen from "./assets/img/Helen.png";
import annie from "./assets/img/Annie.png";
import austin from "./assets/img/Austin.png";

class DirectMesage extends Component {
    constructor(props) {
        super(props);
        this.people = [
            {name: "Nathan", free: true, img: nathan, center: {lat: 42.273831, lng: -71.809737}},
            {name: "Grant", free: true, img: grant, center: {lat: 42.274124, lng: -71.809172}},
            {name: "Monique", free: false, img: monique, center: {lat: 42.275136, lng: -71.811193}},
            {name: "James", free: true, img: james, center: {lat: 42.273425, lng: -71.810928}},
            {name: "Tyrone", free: false, img: tyrone, center: {lat: 42.274935, lng: -71.808099}},
            {name: "Helen", free: false, img: helen, center: {lat: 42.273647, lng: -71.808302}},
            {name: "Annie", free: true, img: annie, center: {lat: 42.272166, lng: -71.810194}},
            {name: "Austin", free: true, img: austin, center: {lat: 42.274251, lng: -71.811233}}
        ];
        this.messages = [];
        this.generateMesages = this.generateMesages.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    generateMesages() {
        return (
            <Grid container spacing={2}>
                {this.messages.map((value) => {
                    return (
                        <Grid item key={value} xs={12}>
                            <Button variant={"contained"} style={{backgroundColor:"#45c462", textTransform:"none", float:"right"}}>
                                {value}
                            </Button>
                        </Grid>
                    );
                })}
                <Grid item xs={12}>
                    <Typography variant={"body2"} style={{float: "right"}}>
                        {this.messages.length? "Sent: just now": ""}
                    </Typography>
                </Grid>
            </Grid>
        );
    }

    handleSend() {
        this.messages.push(document.getElementById("input").value);
        document.getElementById("input").value = "";
        this.forceUpdate();
    }

    render() {
        const {name} = this.props.match.params;
        let data = null;
        for (let i = 0; i < this.people.length; i++) {
            if (this.people[i].name === name) {
                data = this.people[i];
                break;
            }
        }
        return (
            <div className={"View"}>
                <AppBar id={"MenuBar"} color={"secondary"}>
                    <Toolbar id={"toolbar"}>
                        <Grid container>
                            <Grid item xs={2}>
                                <Link to={"/messages"}>
                                    <IconButton>
                                        <ArrowBackIcon fontSize={"large"}/>
                                    </IconButton>
                                </Link>
                            </Grid>
                            <Grid item xs={2}>
                                <img src={data.img} alt={"pfp"}
                                     style={{
                                         height: '50px',
                                         borderRadius: "50%",
                                         width: '50px',
                                         paddingTop: "5px",
                                         paddingLeft: "2px",
                                         paddingRight: "2px"
                                     }}/>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography variant={"h6"} style={{paddingTop: "12px"}}> {name}</Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <div className={"Messages"}>
                    {this.generateMesages()}
                </div>
                <Grid container style={{position: "absolute", bottom: 0, left: 10}}>
                    <Grid item xs={10}>
                        <TextField variant={"outlined"} label={"Message"} style={{width: "100%"}} id={"input"}/>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton onClick={this.handleSend}>
                            <SendIcon fontSize={"large"}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withRouter(DirectMesage);