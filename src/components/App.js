"use strict";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
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
