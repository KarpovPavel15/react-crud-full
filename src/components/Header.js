"use strict";
import React from 'react'
import header from '../css/component-css/header.css'

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.props={
            title:"twitter"
        }
    }
    render() {
        return (
            <header className="headerArea">
                {this.props.title}
            </header>
        );
    }
}