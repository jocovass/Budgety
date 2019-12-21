import React, { Component } from 'react';
import SideBar from '../../SideBar/SideBar';

class Layout extends Component {

    render() {
        return (
            <div>
                <SideBar />
                <p>MainContent</p>
            </div>
        )
    }
}

export default Layout;