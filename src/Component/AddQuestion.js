import React from 'react'
import { FaPlus, FaRegUserCircle, FaRegEdit } from "react-icons/fa";
import Sidebar from './SidebarMenu';
import { Form } from 'react-bootstrap'
import { Label, Input, FormGroup, Col } from 'reactstrap';

const AddQuestion = () => {
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
                        <h5 class="d-inline" style={{ color: "#A09E9D", fontSize: '20px' }}>Manage Question</h5>
                    </div >

                    <div id="exTab3">
                        <ul class="nav nav-pills">
                            <li class="active">
                                <a href="#1b" data-toggle="tab"><FaPlus />{" "}Add Question</a>
                            </li>
                        </ul>

                        <div class="tab-content clearfix">
                            <div class="tab-pane active" id="1b">

                                <div className='AddStudent'>
                                    <Form>
                                        <FormGroup row>
                                            <Label for="exampleSelect" sm={2}>Category Name</Label>
                                            <Col sm={3}>
                                                <div className='ml-2'>
                                                    <Input bsSize="lg" id="exampleSelect" name="select" type="select">
                                                        <option>Select Category</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Input>
                                                </div>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label for="course" sm={2}>Question</Label>
                                            <Col sm={5}>
                                                <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label for="course" sm={2}>Set Marks</Label>
                                            <Col sm={5}>
                                                <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                                            </Col>
                                        </FormGroup>
                                        <button class="button-8 m-3">Add Question</button>
                                    </Form>
                                </div >

                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default AddQuestion
