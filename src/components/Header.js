"use strict";
import React from 'react'
import header from '../css/component-css/header.css'

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title:"twitter"
        }
    }
    render() {
        return (
            <header className="headerArea">
                {this.state.title}
            </header>
        );
    }
}