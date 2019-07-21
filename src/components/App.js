"use strict";
import {Header} from "./HeaderComponent/Header.jsx";
import Content from "./ContentComponent/Content.jsx";
import {Footer} from "./FooterComponent/Footer.jsx";
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
