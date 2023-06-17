import React from 'react'
import { FaPlus, FaRegUserCircle, FaRegEdit } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from './SidebarMenu';
import StudentsList from './StudentsList';
import AddStudent from './AddStudent';
import Feespanding from './Feespanding';
import FeesReceived from './FeesReceived';
import CertificateGenerated from './CertificateGenerated';
import StudentRemoved from './StudentRemoved';


const Student = () => {
    return (
        <>
            <Sidebar>
                <div className='NavButton row'>
                    <button class="button-8 col-2" role="button">Totel Student: 43</button>&nbsp;
                    <button class="button-8 col-2">Pending Student: 0</button>&nbsp;
                    <button class="button-8 col-2" >Fees Submit for Student: 43</button>&nbsp;
                    <button class="button-8 col-2">Advance Wallet Balance: Rs5100</button>&nbsp;
                    <FaRegUserCircle class="col-1" color="#ffffff" textAlign="right" marginLeft="250px" fontSize="2.2em" />
                    <h5 class="col-2" style={{ Color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>User Name</h5>
                </div >

                <div className='NavButton'>
                    <button class="button-8" role="button">Totel Student: 43</button>&nbsp;
                    <button class="button-8">Pending Student: 0</button>&nbsp;
                    <button class="button-8" >Fees Submit for Student: 43</button>&nbsp;
                    <button class="button-8">Advance Wallet Balance: Rs5100</button>&nbsp;
                    <div className='float-end'>
                        <FaRegUserCircle color="#ffffff" fontSize="2.1em" />
                        <h5 class="d-inline" style={{ fontSize: '17px' }}>User Name hfvhfdvi</h5>
                    </div>
                </div >

                <div className='list m-2'>
                    <FaRegEdit color="#A09E9D" fontSize="2.1em" />
                    <h5 class="d-inline" style={{ color: "#A09E9D", fontSize: '20px' }}>Manage Student</h5>
                    <div className='float-end'>
                        <button class="button-8" role="button">Export Students</button>&nbsp;
                        <button class="button-8">Print Student Id Card</button>&nbsp;
                        <button class="button-8" >Print Student Admit Card</button>&nbsp;
                        <button class="button-8">Copy Student to another category</button>&nbsp;
                    </div>
                </div >

                <div id="exTab3" className='px-2'>
                    <ul class="nav nav-pills">
                        <li class="active">
                            <a href="#1a" data-toggle="tab"><AiOutlineMenu />{" "}Fees Pending</a>
                        </li>
                        <li><a href="#2a" data-toggle="tab"><AiOutlineMenu />{" "}Fees Received</a></li>
                        <li><a href="#3a" data-toggle="tab"><AiOutlineMenu />{" "}Certificate Generated</a></li>
                        <li><a href="#4a" data-toggle="tab"><AiOutlineMenu />{" "}Student Removed</a></li>
                        <li><a href="#5a" data-toggle="tab"><AiOutlineMenu />{" "}Total Student List</a></li>
                        <li><a href="#6a" data-toggle="tab"><FaPlus />{" "}Add Student</a></li>
                    </ul>

                    <div class="tab-content clearfix">
                        <div class="tab-pane active" id="1a">
                            <Feespanding />
                        </div>
                        <div class="tab-pane" id="2a"><FeesReceived /></div>
                        <div class="tab-pane" id="3a"><CertificateGenerated /></div>
                        <div class="tab-pane" id="4a"><StudentRemoved /></div>
                        <div class="tab-pane" id="5a"><StudentsList /></div>
                        <div class="tab-pane" id="6a"><AddStudent /></div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default Student;
