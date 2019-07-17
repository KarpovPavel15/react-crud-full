"use strict";
import React from 'react'
import header from '../css/component-css/header.css'

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            listOfUsers:[]
        }
    }
    render() {
        return (
            <header className="headerArea">
                <div><img src="../image/123.png"/></div>
                <h2>CRUD</h2>
                <form className="signInForm">
                    <input type="text" ref="loginField" placeholder="Login"/>
                    <input type="text" ref="passwordField" placeholder="Password"/>
                    <button>Войти</button>
                </form>
            </header>
        );
    }
}