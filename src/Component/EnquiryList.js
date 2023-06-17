import React from 'react'
import { Table, Button } from "react-bootstrap"
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const EnquiryList = () => {
    return (
        <>

            <div className='allExam px-2 py-3'>
                <h5 class="d-inline" style={{ color: "#A09E9D", fontSize: '15px' }}>Total Enquiry: 5</h5>
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
                            <th>Enquiry Number</th>
                            <th>Contact Person</th>
                            <th>Already Details</th>
                            <th>Contact Number</th>
                            <th>First User By</th>
                            <th>Payment Status</th>
                            <th>Follow Time</th>
                            <th>Action</th>
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
                            <td><Button variant="success">Follow</Button> &nbsp;
                                <Button variant="danger">Delete</Button> </td>
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
                            <td><Button variant="success">Follow</Button> &nbsp;
                                <Button variant="danger">Delete</Button> </td>
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
                            <td><Button variant="success">Follow</Button> &nbsp;
                                <Button variant="danger">Delete</Button> </td>
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

export default EnquiryList
