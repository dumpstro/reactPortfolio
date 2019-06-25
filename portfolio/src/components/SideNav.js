import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/SideNav.css";

function SideNav() {
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Justin Summers</h3>
                </div>
                <ul className="list-unstyled components">
                    <p>Heading</p>
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Link 1</a>
                            </li>
                            <li>
                                <a href="#">Link 2</a>
                            </li>
                            <li>
                                <a href="#">Link 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a> 
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideNav;