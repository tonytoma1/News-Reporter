import React from "react";

import '../css/header.css';

export class Header extends React.Component {
    render() {
        return(
            <nav class="navbar navbar-light bg-light">
                <div className="header-content">
                    <img className="logo" src="/newspaper.png" width="30" height="30" alt="" />
                    <h2 className="website-title">Daily News - By Tony Toma</h2>
                </div>
             </nav>
        )
    }
}