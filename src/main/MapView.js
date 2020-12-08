import React, {Component} from 'react';
import {Circle, GoogleMap, LoadScript, OverlayView} from '@react-google-maps/api';
import View from "./View";
import MessageIcon from '@material-ui/icons/Message';
import ListIcon from '@material-ui/icons/List';


import "./css/MapView.css";
import annie from './assets/img/Annie.png';
import nathan from "./assets/img/Nathan.png";
import grant from "./assets/img/Grant.png";
import monique from "./assets/img/Monique.png";
import james from "./assets/img/James.png";
import tyrone from "./assets/img/Tyrone.png";
import helen from "./assets/img/Helen.png";
import austin from "./assets/img/Austin.png";
import {Tooltip} from "@material-ui/core";

const containerStyle = {
    width: '375px',
    height: '550px'
};

const center = {
    lat: 42.273831,
    lng: -71.809737
};

class MapView extends Component {
    constructor(props) {
        super(props);
        this.key = "AIzaSyBp60DmJfFYKkK7G7elC8WiOcmB37NewL4";
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
            this.people.map((value) => {
                    return (

                        <OverlayView position={value.center} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} key={value.name}>
                            <Tooltip title={value.name + " is " + (value.free ? "free" : "busy")} enterDelay={500}
                                     leaveDelay={200}>
                                <div>
                                    <span className={"dot"} style={{backgroundColor: this.getColor(value.free)}}/>
                                    <img src={value.img} alt={"pfp"}
                                         style={{
                                             position: "absolute",
                                             top: 5,
                                             left: 5,
                                             height: '50px',
                                             borderRadius: "50%",
                                             width: '50px'
                                         }}/>
                                </div>
                            </Tooltip>
                        </OverlayView>

                    );
                }
            )
        );
    }

    getColor(free) {
        if (free) {
            return "#45c462";
        }
        return '#db5248';
    }

    generateCircles() {
        return (
            this.people.map((value) => {
                return (
                    <Circle center={value.center} options={this.getOptions(value.free)} radius={17}/>
                );
            })
        );
    }

    generateMap() {
        return (
            <div className={"Map"}>
                <LoadScript googleMapsApiKey={this.key}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={17}

                        options={{
                            zoomControl: false,
                            mapTypeControl: false,
                            scaleControl: false,
                            streetViewControl: false,
                            rotateControl: false,
                            fullscreenControl: false,
                            mapTypeId: "satellite"
                        }}>
                        {this.generatePeople()}
                        {/*{this.generateCircles()}*/}
                        <></>
                    </GoogleMap>
                </LoadScript>
            </div>
        );
    }

    render() {
        return (
            <View viewContent={this.generateMap()} leftIcon={<MessageIcon fontSize={"large"}/>} leftLink={"/messages"}
                  rightIcon={<ListIcon fontSize={"large"}/>} rightLink={"/list"}/>
        )
    }
}

export default MapView;