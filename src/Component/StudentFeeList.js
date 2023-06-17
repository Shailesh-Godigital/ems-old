import React from 'react'
import { Table, Button } from "react-bootstrap"
import { MdPrint, MdAccountBalanceWallet } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const StudentFeeList = () => {
    return (
        <>
            <div className='allExam px-2 py-3'>
                <h5 class="d-inline" style={{ color: "#A09E9D", fontSize: '15px' }}>All Student: 45</h5>
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
                            <th>#S.No</th>
                            <th>Roll No.</th>
                            <th>Student Name</th>
                            <th>Receipt No</th>
                            <th>Total</th>
                            <th>Pending</th>
                            <th>Due Date</th>
                            <th>Set</th>
                            <th>View</th>
                            <th>Deposit</th>
                            <th>Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>EMCE725785 </td>
                            <td>Sakshi </td>
                            <td>#EMAXX5528/EMCE725785 </td>
                            <td>800 </td>
                            <td>7700 </td>
                            <td>09/20/2022 </td>
                            <td><Button variant="danger">Set Fees</Button> </td>
                            <td>
                                <MdPrint color="Black" fontSize="1.9em" />
                            </td>
                            <td>
                                <MdAccountBalanceWallet color="Black" fontSize="1.5em" /></td>
                            <td>
                                <FaFilePdf color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>EMCE725785 </td>
                            <td>Sakshi </td>
                            <td>#EMAXX5528/EMCE725785 </td>
                            <td>800 </td>
                            <td>7700 </td>
                            <td>09/20/2022 </td>
                            <td><Button variant="danger">Set Fees</Button> </td>
                            <td>
                                <MdPrint color="Black" fontSize="1.9em" />
                            </td>
                            <td>
                                <MdAccountBalanceWallet color="Black" fontSize="1.5em" /></td>
                            <td>
                                <FaFilePdf color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>1</td>
                            <td>EMCE725785 </td>
                            <td>Sakshi </td>
                            <td>#EMAXX5528/EMCE725785 </td>
                            <td>800 </td>
                            <td>7700 </td>
                            <td>09/20/2022 </td>
                            <td><Button variant="danger">Set Fees</Button> </td>
                            <td>
                                <MdPrint color="Black" fontSize="1.9em" />
                            </td>
                            <td>
                                <MdAccountBalanceWallet color="Black" fontSize="1.5em" /></td>
                            <td>
                                <FaFilePdf color="#DC3545" fontSize="1.9em" />
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

export default StudentFeeList
