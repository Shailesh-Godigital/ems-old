import React from 'react'
import Sidebar from './SidebarMenu';

import {
    FcPieChart,
    FcReadingEbook,
    FcInspection,
    FcTodoList,
    FcQuestions,
    FcBusinessContact,
    FcFeedback,
    FcSettings,
    FcReading,
    FcBusinessman,
    FcFaq,
    FcCollaboration
} from "react-icons/fc";
import {
    GiWhiteBook,
    GiWallet,
    GiMoneyStack
} from "react-icons/gi";
import {
    TbPassword,
    TbFlagFilled
} from "react-icons/tb";
import {
    GoListOrdered,
    GoChecklist,
    GoLink,
    GoDeviceDesktop
} from "react-icons/go";

import { NavLink } from 'react-router-dom';

function Dashboard() {
    return (
        <>
            <Sidebar>
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/dashboard">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                            <span className="link_text text-center">Dashbord</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/student">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><FcReadingEbook /> </h1>
                                            <span className="link_text text-center">Student</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/exam">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><FcInspection /> </h1>
                                            <span className="link_text text-center">Exam</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/addQuestion">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><FcQuestions /> </h1>
                                            <span className="link_text text-center">Add Question</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                <div className="d-flex align-items-center">
                                    <div className="mt-2 mb-3 w-100">
                                        <h1 className="mb-0 mt-0 textLeft"><FcTodoList /> </h1>
                                        <span className="link_text text-center">Notice</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/contact">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><FcBusinessContact /> </h1>
                                            <span className="link_text text-center">Contact</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/wallet">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><GiWallet /> </h1>
                                            <span className="link_text text-center">Wallet</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/allTest">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><FcInspection /> </h1>
                                            <span className="link_text text-center">All Test</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/message">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><FcFeedback /> </h1>
                                            <span className="link_text text-center">Message</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/user">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><FcBusinessman /> </h1>
                                            <span className="link_text text-center">Users</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/changepassword">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><TbPassword /> </h1>
                                            <span className="link_text text-center">Change Password</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/enquiry">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><FcFeedback /> </h1>
                                            <span className="link_text text-center">Enquiry Management</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/bookManagement">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><FcReading /> </h1>
                                            <span className="link_text text-center">Book Management</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><FcReadingEbook /> </h1>
                                            <span className="link_text text-center">Ebooks by Head Office</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/scr">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><GiWhiteBook /> </h1>
                                            <span className="link_text text-center">SCR</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                <div className="d-flex align-items-center">
                                    <div className="mt-2 mb-3 w-100">
                                        <h1 className="mb-0 mt-0 textLeft"><GoListOrdered /> </h1>
                                        <span className="link_text text-center">Top Centers List</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                <div className="d-flex align-items-center">
                                    <div className="mt-2 mb-3 w-100">
                                        <h1 className="mb-0 mt-0 textLeft"><GoChecklist /> </h1>
                                        <span className="link_text text-center">Center Certificate List</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                <div className="d-flex align-items-center">
                                    <div className="mt-2 mb-3 w-100">
                                        <h1 className="mb-0 mt-0 textLeft"><GoChecklist /> </h1>
                                        <span className="link_text text-center">Live Courses</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                <div className="d-flex align-items-center">
                                    <div className="mt-2 mb-3 w-100">
                                        <h1 className="mb-0 mt-0 textLeft"><GoLink /> </h1>
                                        <span className="link_text text-center">Online Admission Link</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                <div className="d-flex align-items-center">
                                    <div className="mt-2 mb-3 w-100">
                                        <h1 className="mb-0 mt-0 textLeft"><GoDeviceDesktop /> </h1>
                                        <span className="link_text text-center">Online Class</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                <div className="d-flex align-items-center">
                                    <div className="mt-2 mb-3 w-100">
                                        <h1 className="mb-0 mt-0 textLeft"><FcFaq /> </h1>
                                        <span className="link_text text-center">FAQ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                <div className="d-flex align-items-center">
                                    <div className="mt-2 mb-3 w-100">
                                        <h1 className="mb-0 mt-0 textLeft"><TbFlagFilled /> </h1>
                                        <span className="link_text text-center">Policy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                <div className="d-flex align-items-center">
                                    <div className="mt-2 mb-3 w-100">
                                        <h1 className="mb-0 mt-0 textLeft"><GoLink /> </h1>
                                        <span className="link_text text-center">Open Website</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                <div className="d-flex align-items-center">
                                    <div className="mt-2 mb-3 w-100">
                                        <h1 className="mb-0 mt-0 textLeft"><FcSettings /> </h1>
                                        <span className="link_text text-center">Web Settings</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                <div className="d-flex align-items-center">
                                    <div className="mt-2 mb-3 w-100">
                                        <h1 className="mb-0 mt-0 textLeft"><GiWhiteBook /> </h1>
                                        <span className="link_text text-center">Download Admit Card</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-2 col-md-2 mt-md-4">
                            <NavLink to="/feesmanagement">
                                <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="mt-2 mb-3 w-100">
                                            <h1 className="mb-0 mt-0 textLeft"><GiMoneyStack /> </h1>
                                            <span className="link_text text-center">Fees Management</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default Dashboard
