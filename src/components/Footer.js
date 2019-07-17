"use strict";
import React from 'react'
import '../css/component-css/footer.css'

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title:"Footer twitter"
        }
    }
    render() {
        return (
            <footer className="footerArea">
                <h2 className="footerText">{this.state.title}</h2>
            </footer>
        );
    }
}