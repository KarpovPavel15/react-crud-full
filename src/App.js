"use strict";
import {Header} from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import {Footer} from "./components/Footer.jsx";
import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div className = "app">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }

}
