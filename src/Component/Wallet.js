import React from 'react'
import { FaPlus, FaRegUserCircle, FaRegEdit } from "react-icons/fa";
import Sidebar from './SidebarMenu';
import { AiOutlineMenu } from "react-icons/ai";
import PaymtList from './PaymtList';
import AddPaymtReq from './AddPaymtReq';

const Wallet = () => {
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
                        <h5 class="d-inline" style={{ color: "#A09E9D", fontSize: '20px' }}>Manage Wallet</h5>
                    </div >

                    <div id="exTab3">
                        <ul class="nav nav-pills">
                            <li class="active">
                                <a href="#1b" data-toggle="tab"><AiOutlineMenu />{" "}Payment List</a>
                            </li>
                            <li><a href="#2b" data-toggle="tab"><FaPlus />{" "}Add Payment Request</a></li>
                        </ul>

                        <div class="tab-content clearfix">
                            <div class="tab-pane active" id="1b">
                                <PaymtList />
                            </div>
                            <div class="tab-pane" id="2b"><AddPaymtReq /></div>
                        </div>
                    </div>
                </div>
            </Sidebar>

        </>
    )
}

export default Wallet
