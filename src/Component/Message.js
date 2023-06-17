import React, { useState, useRef } from 'react';
import { Label, FormGroup, Form, Col } from 'reactstrap';
import JoditEditor from 'jodit-react';
import { FaPlus, FaRegUserCircle, FaRegEdit } from "react-icons/fa";
import Sidebar from './SidebarMenu';

const Message = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
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
                        <h5 class="d-inline" style={{ color: "#A09E9D", fontSize: '20px' }}> Student Message</h5>
                    </div >

                    <div id="exTab3">
                        <ul class="nav nav-pills">
                            <li class="active">
                                <a href="#1b" data-toggle="tab"><FaPlus />{" "}Add</a>
                            </li>
                        </ul>

                        <div class="tab-content clearfix">
                            <div class="tab-pane active" id="1b">
                                <div className='AddStudent'>
                                    <Form>
                                        <FormGroup row>
                                            <Label for="course" sm={2}>Message</Label>
                                            <Col sm={8}>
                                                <div className='ml-2'>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={content}
                                                        onChange={newContent => setContent(newContent)}
                                                    />
                                                </div>
                                            </Col>
                                        </FormGroup>

                                        <button class="button-8 m-3">Send Mail</button>
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

export default Message
