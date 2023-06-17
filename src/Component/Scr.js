import React from 'react'
import { FaPlus, FaRegUserCircle, FaRegEdit } from "react-icons/fa";
import Sidebar from './SidebarMenu';
import { AiOutlineMenu } from "react-icons/ai";
import AddStudent from './AddStudent';
import EnquiryList from './EnquiryList';
import TopCentersList from './TopCentersList';

const Scr = () => {
    return (
        <>
            <Sidebar>
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

                <div className="m-2">
                    <div className='list mb-4'>
                        <FaRegEdit color="#A09E9D" fontSize="2.1em" />
                        <h5 class="d-inline" style={{ color: "#A09E9D", fontSize: '20px' }}>Submit Certificate Request</h5>
                    </div >

                    <div id="exTab3">
                        <ul class="nav nav-pills">
                            <li class="active">
                                <a href="#1b" data-toggle="tab"><AiOutlineMenu />{" "}Certificate Request List</a>
                            </li>
                            <li><a href="#2b" data-toggle="tab"><FaPlus />{" "}Add Certificate Request</a></li>
                            <li><a href="#3b" data-toggle="tab"><AiOutlineMenu />{" "}Approved List</a></li>
                            <li><a href="#4b" data-toggle="tab"><AiOutlineMenu />{" "}Generated List</a></li>
                            <li><a href="#5b" data-toggle="tab"><AiOutlineMenu />{" "}Dispatched List</a></li>
                        </ul>

                        <div class="tab-content clearfix">
                            <div class="tab-pane active" id="1b">
                                <EnquiryList />
                            </div>
                            <div class="tab-pane" id="2b"><AddStudent /></div>
                            <div class="tab-pane" id="3b"><AddStudent /></div>
                            <div class="tab-pane" id="4b"><AddStudent /></div>
                            <div class="tab-pane" id="5b"><TopCentersList /></div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default Scr
