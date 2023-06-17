import React from 'react'
import { FaPlus, FaRegUserCircle, FaRegEdit } from "react-icons/fa";
import Sidebar from './SidebarMenu';
import ExamList from './ExamList';
import AddExam from './AddExam';
import FinalExamList from './FinalExamList';
import { AiOutlineMenu } from "react-icons/ai";



const Exam = () => {
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
                        <h5 class="d-inline" style={{ color: "#A09E9D", fontSize: '20px' }}>Manage Exam</h5>
                    </div >

                    <div id="exTab3">
                        <ul class="nav nav-pills">
                            <li class="active">
                                <a href="#1b" data-toggle="tab"><AiOutlineMenu />{" "}Exam List</a>
                            </li>
                            <li><a href="#2b" data-toggle="tab"><FaPlus />{" "}Add Exam</a></li>
                            <li><a href="#3b" data-toggle="tab"><AiOutlineMenu />{" "}Final Exam List</a></li>
                            <li><a href="#4b" data-toggle="tab"><FaPlus />{" "}Add Final Exam</a></li>
                            <li><a href="#5b" data-toggle="tab"><AiOutlineMenu />{" "}Copy Form Existing Exam</a></li>
                        </ul>

                        <div class="tab-content clearfix">
                            <div class="tab-pane active" id="1b">
                                <ExamList />
                            </div>
                            <div class="tab-pane" id="2b"><AddExam /></div>
                            <div class="tab-pane" id="3b"><FinalExamList /></div>
                            <div class="tab-pane" id="4b"><AddExam /></div>
                            <div class="tab-pane" id="5b"><AddExam /></div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default Exam
