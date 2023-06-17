import React from 'react'
import { Table, Button } from "react-bootstrap"
import { FiEdit, FiLogIn } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const StudentRemoved = () => {
    return (
        <>
            <div className='allExam px-2 py-3'>
                <h5 class="d-inline" style={{ color: "#A09E9D", fontSize: '15px' }}>Total Students: 3</h5>
                <div className='searchBar float-end'>
                    <input type="text" placeholder="Search.." name="search2" />
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div>
            </div >



            <div className='tableList pl-2'>
                <Table style={{ width: "120%" }}>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>#</th>
                            <th>Category Name</th>
                            <th>Center Name</th>
                            <th>Roll No.</th>
                            <th>Student Name</th>
                            <th>Father Name</th>
                            <th>Charge Rate</th>
                            <th>Status</th>
                            <th>Payment Status</th>
                            <th>Options</th>
                            <th>Option2</th>
                            <th>Student Login</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>Demo Full Name tuiyiu ouoiu </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FaEyeSlash color="Red" fontSize="1.5em" />
                                </NavLink>
                            </td>
                            <td><Button variant="success">Restore</Button> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                            <td> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>Demo Full Name tuiyiu ouoiu </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FaEyeSlash color="Red" fontSize="1.5em" />
                                </NavLink>
                            </td>
                            <td><Button variant="success">Restore</Button> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                            <td> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>Demo Full Name tuiyiu ouoiu </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FaEyeSlash color="Red" fontSize="1.5em" />
                                </NavLink>
                            </td>
                            <td><Button variant="success">Restore</Button> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                            <td> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>Demo Full Name tuiyiu ouoiu </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FaEyeSlash color="Red" fontSize="1.5em" />
                                </NavLink>
                            </td>
                            <td><Button variant="success">Restore</Button> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                            <td> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>Demo Full Name tuiyiu ouoiu </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FaEyeSlash color="Red" fontSize="1.5em" />
                                </NavLink>
                            </td>
                            <td><Button variant="success">Restore</Button> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                            <td> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>Demo Full Name tuiyiu ouoiu </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FaEyeSlash color="Red" fontSize="1.5em" />
                                </NavLink>
                            </td>
                            <td><Button variant="success">Restore</Button> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                            <td> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>Demo Full Name tuiyiu ouoiu </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FaEyeSlash color="Red" fontSize="1.5em" />
                                </NavLink>
                            </td>
                            <td><Button variant="success">Restore</Button> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                            <td> </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div >

            <div className='preNext'>
                <Pagination aria-label="Page navigation example" size="lg">
                    <PaginationItem>
                        <PaginationLink first href="#">First </PaginationLink>
                    </PaginationItem>
                    <PaginationLink href="#" previous>Previous</PaginationLink>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" next>Next</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" last>Last</PaginationLink>
                    </PaginationItem>
                </Pagination>
            </div>
        </>
    )
}

export default StudentRemoved
