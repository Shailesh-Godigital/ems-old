import React from 'react'
import { Table, Button } from "react-bootstrap"
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdAddCircle } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaymtList = () => {
    return (
        <>

            <div className='allExam px-2 py-3'>
                <h5 class="d-inline" style={{ color: "#A09E9D", fontSize: '15px' }}>All Exam: 45</h5>
                <div className='searchBar float-end'>
                    <input type="text" placeholder="Search.." name="search2" />
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div>
            </div >

            <div className='tableList pl-2' style={{ height: "50%" }}>
                <Table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>#</th>
                            <th>Category Name</th>
                            <th>Subcategory Name</th>
                            <th>Subject Name</th>
                            <th>Exam Name</th>
                            <th>Status</th>
                            <th>Add & View</th>
                            <th>Edit & Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>ADSE (Advance Diploma in Software) (12th Month) </td>
                            <td>Basic Computer Course (BCC) </td>
                            <td>MS-office, Fundamental Computer, Windows/Dos, </td>
                            <td>Basic Computer Course </td>
                            <td><Button variant="danger">Deactivate</Button> </td>
                            <td>
                                <MdAddCircle color="green" fontSize="1.9em" />&nbsp;
                                <FaEyeSlash color="#0394e8" fontSize="1.5em" />
                            </td>
                            <td>
                                <MdDelete color="#DC3545" fontSize="1.9em" />&nbsp;
                                <NavLink to="/editstudent">
                                    <FiEdit color="#5b92ff" fontSize="1.5em" /></NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>ADSE (Advance Diploma in Software) (12th Month) </td>
                            <td>Basic Computer Course (BCC) </td>
                            <td>MS-office, Fundamental Computer, Windows/Dos, </td>
                            <td>Basic Computer Course </td>
                            <td><Button variant="danger">Deactivate</Button> </td>
                            <td>
                                <MdAddCircle color="green" fontSize="1.9em" />&nbsp;
                                <FaEyeSlash color="#0394e8" fontSize="1.5em" />
                            </td>
                            <td>
                                <MdDelete color="#DC3545" fontSize="1.9em" />&nbsp;
                                <NavLink to="/editstudent">
                                    <FiEdit color="#5b92ff" fontSize="1.5em" /></NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>ADSE (Advance Diploma in Software) (12th Month) </td>
                            <td>Basic Computer Course (BCC) </td>
                            <td>MS-office, Fundamental Computer, Windows/Dos, </td>
                            <td>Basic Computer Course </td>
                            <td><Button variant="danger">Deactivate</Button> </td>
                            <td>
                                <MdAddCircle color="green" fontSize="1.9em" />&nbsp;
                                <FaEyeSlash color="#0394e8" fontSize="1.5em" />
                            </td>
                            <td>
                                <MdDelete color="#DC3545" fontSize="1.9em" />&nbsp;
                                <NavLink to="/editstudent">
                                    <FiEdit color="#5b92ff" fontSize="1.5em" /></NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>ADSE (Advance Diploma in Software) (12th Month) </td>
                            <td>Basic Computer Course (BCC) </td>
                            <td>MS-office, Fundamental Computer, Windows/Dos, </td>
                            <td>Basic Computer Course </td>
                            <td><Button variant="danger">Deactivate</Button> </td>
                            <td>
                                <MdAddCircle color="green" fontSize="1.9em" />&nbsp;
                                <FaEyeSlash color="#0394e8" fontSize="1.5em" />
                            </td>
                            <td>
                                <MdDelete color="#DC3545" fontSize="1.9em" />&nbsp;
                                <NavLink to="/editstudent">
                                    <FiEdit color="#5b92ff" fontSize="1.5em" /></NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>ADSE (Advance Diploma in Software) (12th Month) </td>
                            <td>Basic Computer Course (BCC) </td>
                            <td>MS-office, Fundamental Computer, Windows/Dos, </td>
                            <td>Basic Computer Course </td>
                            <td><Button variant="success">Active</Button> </td>
                            <td>
                                <MdAddCircle color="green" fontSize="1.9em" />&nbsp;
                                <FaEyeSlash color="#0394e8" fontSize="1.5em" />
                            </td>
                            <td>
                                <MdDelete color="#DC3545" fontSize="1.9em" />&nbsp;
                                <NavLink to="/editstudent">
                                    <FiEdit color="#5b92ff" fontSize="1.5em" /></NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>ADSE (Advance Diploma in Software) (12th Month) </td>
                            <td>Basic Computer Course (BCC) </td>
                            <td>MS-office, Fundamental Computer, Windows/Dos, </td>
                            <td>Basic Computer Course </td>
                            <td><Button variant="danger">Deactivate</Button> </td>
                            <td>
                                <MdAddCircle color="green" fontSize="1.9em" />&nbsp;
                                <FaEyeSlash color="#0394e8" fontSize="1.5em" />
                            </td>
                            <td>
                                <MdDelete color="#DC3545" fontSize="1.9em" />&nbsp;
                                <NavLink to="/editstudent">
                                    <FiEdit color="#5b92ff" fontSize="1.5em" /></NavLink>
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

export default PaymtList
