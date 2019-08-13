import React from 'react'
import '../scss/footer.scss'

export const Footer =()=>{
    let data=require("../listOfTwits");
    let variable=data.en.titleFooter;
    return (
        <footer className="footer-area">
            <h2 className="footer-area_text">{variable}</h2>
        </footer>
    )
};

