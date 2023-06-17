import React from 'react'
import Dashboard from './Dashboard'
import Student from './Student'
import Sidebar from 'cdbreact/dist/components/Sidebar/SidebarMenu ';
import ZoomClass from './ZoomClass';
import Onlineclass from './Onlineclass';

function DashRout() {
    return (
        <div>
            <Sidebar></Sidebar>
            <Dashboard></Dashboard>
            <Student></Student>
            <ZoomClass></ZoomClass>
            <Onlineclass></Onlineclass>
        </div>
    )
}

export default DashRout;
