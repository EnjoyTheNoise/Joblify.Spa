import React from "react";
import "./Footer.css";

const Footer = () => {
    const date = new Date();

    return (
        <div className="footer">
            <p>Joblify {date.getFullYear()}</p>
        </div>
    );
}

export default Footer;