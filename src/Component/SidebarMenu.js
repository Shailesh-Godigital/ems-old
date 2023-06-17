import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaEnvelope,
    FaListOl,
    FaQuestionCircle,
    FaRegEnvelope,
    FaWallet,
    FaRegMoneyBillAlt,
    FaVideo,
    FaLock,
    FaBook,
    FaCertificate,
    FaPhoneAlt
} from "react-icons/fa";
import { GoListOrdered } from "react-icons/go"
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/student",
            name: "Student",
            icon: <FaUserAlt />
        },
        {
            path: "/exam",
            name: "Exam",
            icon: <FaBook />
        },
        {
            path: "/addQuestion",
            name: "Add Question",
            icon: <FaQuestionCircle />
        },
        {
            path: "/notice",
            name: "Notice",
            icon: <FaListOl />
        },
        // {
        //     path: "/inbox",
        //     name: "Inbox",
        //     icon: <FaEnvelope />
        // },
        {
            path: "/contact",
            name: "Contact",
            icon: <FaRegEnvelope />
        },
        {
            path: "/wallet",
            name: "Wallet",
            icon: <FaWallet />
        },
        {
            path: "/feesmanagement",
            name: "Fees Management",
            icon: <FaRegMoneyBillAlt />
        },
        {
            path: "/allTest",
            name: "All Test",
            icon: <FaBook />
        },
        {
            path: "/onlineClass",
            name: "Online Classes",
            icon: <FaVideo />
        },
        // {
        //     path: "/",
        //     name: "Gmeet Live Classes",
        //     icon: <FaCamera />
        // },
        {
            path: "/message",
            name: "Message",
            icon: <FaEnvelope />
        },
        {
            path: "/user",
            name: "Users",
            icon: <FaUserAlt />
        },
        {
            path: "/changepassword",
            name: "Change Password",
            icon: <FaLock />
        },
        {
            path: "/enquiry",
            name: "Enquiry",
            icon: <FaPhoneAlt />
        },
        {
            path: "/bookManagement",
            name: "Book Management",
            icon: <FaBook />
        },
        {
            path: "/scr",
            name: "SCR",
            icon: <FaBook />
        },
        {
            path: "/topCentersList",
            name: "Top Centers List",
            icon: <GoListOrdered />
        },
        // {
        //     path: "/",
        //     name: "Center Certificate List",
        //     icon: <FaCertificate />
        // },
    ]
    return (
        <div className="sidebarMenu">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section" style={{ padding: "10px 15px" }}>
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">EMS</h1>
                    <div style={{ marginLeft: isOpen ? "95px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;