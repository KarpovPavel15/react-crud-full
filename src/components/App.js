"use strict";
import {Header} from "./HeaderComponent/Header";
import Content from "./ContentComponent/Content";
import {Footer} from "./FooterComponent/Footer";
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
