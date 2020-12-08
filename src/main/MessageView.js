import React, {Component} from "react";
import View from "./View";
import nathan from "./assets/img/Nathan.png";
import grant from "./assets/img/Grant.png";
import monique from "./assets/img/Monique.png";
import james from "./assets/img/James.png";
import tyrone from "./assets/img/Tyrone.png";
import helen from "./assets/img/Helen.png";
import annie from "./assets/img/Annie.png";
import austin from "./assets/img/Austin.png";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import MapIcon from "@material-ui/icons/Map";
import {Link} from "react-router-dom";

class MessageView extends Component {
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
    }

    generatePeople() {
        return (
            <Grid container>
                {this.people.map((value) => {
                    return (
                        <Grid item xs={12} key={value.name}>
                            <Link to={"direct/" + value.name} style={{textDecoration: "none"}}>
                                <Card style={{borderRadius: 0, height: '68px'}}
                                      className={"Item"}>
                                    <CardContent className={"Item"}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={1}>
                                                <img src={value.img} alt={"pfp"}
                                                     style={{height: '50px', borderRadius: "50%", width: '50px'}}/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant={"h6"} style={{paddingTop: "5px"}}>{value.name}</Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>
        );
    }

    render() {
        return (
            <View viewContent={this.generatePeople()} leftIcon={<ListIcon fontSize={"large"}/>} leftLink={"/list"}
                  rightIcon={<MapIcon fontSize={"large"}/>} rightLink={"/map"}/>
        );
    }
}

export default MessageView;
