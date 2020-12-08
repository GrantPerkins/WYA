import React from "react";

import {HashRouter, Route, Switch} from "react-router-dom";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

import MapView from "./MapView";
import './App.css';
import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import ListView from "./ListView";
import MessageView from "./MessageView";
import DirectMesage from "./DirectMesage";

const theme = createMuiTheme({
    palette: {
        default: {
            main: '#45c462',
        },
        primary: {
            main: '#d63c1a',
        },
        secondary: {
            main: '#abb3ad'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});


function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className={"App"}>
                <HashRouter>
                    <Switch>
                        <Route path={"/login"}>
                            <Login/>
                        </Route>
                        <Route path={"/list"}>
                            <ListView/>
                        </Route>
                        <Route path={"/register"}>
                            <Register/>
                        </Route>
                        <Route path={"/map"}>
                            <MapView/>
                        </Route>
                        <Route path={"/messages"}>
                            <MessageView/>
                        </Route>
                        <Route path={"/direct/:name"}>
                            <DirectMesage/>
                        </Route>
                        <Route path={"/"}>
                            <Welcome/>
                        </Route>
                    </Switch>
                </HashRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
