import React from "react";
import {Link} from 'react-router-dom';
import '../css/header.css';

export class Header extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-light bg-light top-nav">
                    <div className="header-content">
                        <img className="logo" src="/newspaper.png" width="30" height="30" alt="" />
                        <h2 className="website-title">Daily News - By Tony Toma</h2>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className={"nav-item nav-link " + (this.props.code == 'us' ? 'active' : '')} href="#" onClick={() => {window.location.href="/"}}><span className="header-links">American News</span></a>
                        <a className={"nav-item nav-link " + (this.props.code == 'br' ? 'active' : '')} href="#" onClick={() => {window.location.href="/brazil"}}><span className="header-links">Brazilian News</span></a>
                        </div>
                    </div>
                </nav>
             </div>
        )
    }
}