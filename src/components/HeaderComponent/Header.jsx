import React from 'react'
import header from './header.css'
import FormForSignIn from "../FormForSignIn";

export const Header =()=>{
        let data=require("../../listOfTwits.json");
        let variable=data.titleHeader;
        return (
            <header className="headerArea">
                <div><img src="../../image/headerLogo.png"/></div>
                <h2>{variable}</h2>
                <FormForSignIn/>
            </header>
        );
};