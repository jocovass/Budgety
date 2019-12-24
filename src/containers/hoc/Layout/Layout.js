import React, { Component } from 'react';
import SideBar from '../../SideBar/SideBar';

class Layout extends Component {

    render() {
        return (
            <>
                <SideBar />
                <p>MainContent</p>
            </>
        )
    }
}

export default Layout;