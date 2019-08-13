import React from 'react'
import header from '../scss/header.scss'
import FormForSignIn from "../FormForSignIn";

export const Header =()=>{
        let data=require("../listOfTwits.json");
        let variable=data.en.titleHeader;
        return (
            <header className="header-area">
                    <h2>{variable}</h2>
                    <FormForSignIn/>
            </header>
        );
};