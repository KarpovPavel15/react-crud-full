import React from 'react'
import './footer.css'

export const Footer =()=>{
    let data=require("../../listOfTwits");
    let variable=data.en.titleFooter;
        return (
            <footer className="footerArea">
                <h2 className="footerArea_Text">{variable}</h2>
            </footer>
        )
};

