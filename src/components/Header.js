import React from 'react'
import header from './header.css'
import FormForSignIn from "./FormForSignIn";

export const Header =()=>{
        return (
            <header className="headerArea">
                <div><img src="../image/headerLogo.png"/></div>
                <h2>CRUD</h2>
                <FormForSignIn/>
            </header>
        );
};