import React from "react";

export default class FormForSignIn extends React.Component{
        render() {
                return (
                    <form className="header-area_sign-in-form">
                            <input type="text" ref="loginField" placeholder="Login"/>
                            <input type="text" ref="passwordField" placeholder="Password"/>
                            <button>Войти</button>
                    </form>
                )
        }
};
