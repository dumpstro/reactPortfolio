import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideNav from "../../components/SideNav.js"
import "./Home.css"

class Home extends Component {
    render() {
        return (
            <div ClassName="home">
                <SideNav />
            </div>
        )
    }
}

export default Home;
