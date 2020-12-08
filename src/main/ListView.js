import React, {Component} from "react";
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import MapIcon from '@material-ui/icons/Map';
import MessageIcon from '@material-ui/icons/Message';
import {Card, CardContent, Grid, Typography} from "@material-ui/core";

import annie from './assets/img/Annie.png';
import austin from './assets/img/Austin.png';
import grant from './assets/img/Grant.png';
import helen from './assets/img/Helen.png';
import james from './assets/img/James.png';
import monique from './assets/img/Monique.png';
import nathan from './assets/img/Nathan.png';
import tyrone from './assets/img/Tyrone.png';
import View from "./View";
import {Link} from "react-router-dom";

class ListView extends Component {

    getColor(free) {
        if (free) {
            return "#45c462";
        }
        return '#db5248';
    }

    getIcon(free) {
        if (free) {
            return <CheckIcon fontSize={"large"} style={{paddingTop: "5px"}}/>;
        }
        return <ClearIcon fontSize={"large"} style={{paddingTop: "5px"}}/>;
    }

    generateList() {
        return (
            <Grid container spacing={0} style={{padding: '7px'}}>
                {[
                    {name: "Nathan", free: true, img: nathan},
                    {name: "Grant", free: true, img: grant},
                    {name: "Monique", free: false, img: monique},
                    {name: "James", free: true, img: james},
                    {name: "Tyrone", free: false, img: tyrone},
                    {name: "Helen", free: false, img: helen},
                    {name: "Annie", free: true, img: annie},
                    {name: "Austin", free: true, img: austin}
                ].map((value) => {
                    return (
                        <Grid item xs={12} key={value.name}>
                            <Link to={"direct/" + value.name} style={{textDecoration: "none"}}>
                                <Card style={{
                                    backgroundColor: this.getColor(value.free),
                                    borderRadius: 0,
                                    height: '68px'
                                }}
                                      className={"Item"}>
                                    <CardContent className={"Item"} style={{padding: "10px"}}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={2}>
                                                {this.getIcon(value.free)}
                                            </Grid>
                                            <Grid item xs={1}>
                                                <img src={value.img} alt={"pfp"}
                                                     style={{
                                                         height: '50px',
                                                         borderRadius: "50%",
                                                         width: '50px',
                                                         paddingBottom: "5px",
                                                         paddingLeft: "2px",
                                                         paddingRight: "2px"
                                                     }}/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant={"h6"}
                                                            style={{paddingTop: "5px"}}>{value.name}</Typography>
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
            <View viewContent={this.generateList()} leftIcon={<MessageIcon fontSize={"large"}/>} leftLink={"/messages"}
                  rightIcon={<MapIcon fontSize={"large"}/>} rightLink={"/map"}/>
        );
    }
}

export default ListView;