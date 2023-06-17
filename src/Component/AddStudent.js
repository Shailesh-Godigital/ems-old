import React, { useState, useRef } from 'react';
import { Row, Label, Input, FormGroup, Col, Form } from 'reactstrap';
import JoditEditor from 'jodit-react';

function AddStudent() {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    return (
        <>
            <div className='AddStudent m-5'>
                <Form>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={1}>Category Name</Label>
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
                        <Label for="course" sm={1}>Course Detail</Label>
                        <Col sm={10}>
                            <div className='ml-2'>
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    onChange={newContent => setContent(newContent)}
                                />
                            </div>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleSelect" sm={1}>Center Name</Label>
                        <Col sm={3}>
                            <div className='ml-2'>
                                <Input bsSize="lg" id="exampleSelect" name="select" type="select">
                                    <option>Select Center</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </div>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>Student Name</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleSelect" sm={1}>Student Gender</Label>
                        <Col sm={3}>
                            <div className='ml-2'>
                                <Input bsSize="lg" id="exampleSelect" name="select" type="select">
                                    <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </Input>
                            </div>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>Session</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>Father Name</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>Guardian Type</Label>
                        <Col sm={5}>
                            <FormGroup check className='ml-2'>
                                <Input name="radio2" type="radio" />
                                <p check className='pt-3'>
                                    Father
                                </p>
                            </FormGroup>
                            <FormGroup check className='ml-2'>
                                <Input name="radio2" type="radio" />
                                <p check className='pt-3'>
                                    Hasband
                                </p>
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>Mother Name</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>Course Fees</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>Qualification</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    {/* <FormGroup row>
                        <Label for="course" sm={1}>Student Image</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup> */}

                    <FormGroup row>
                        <Label for="course" sm={1}>Date of Birth</Label>
                        <Col sm={3}>
                            <Input bsSize="lg" id="exampleDate" name="date" placeholder="" type="date" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>Address</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleSelect" sm={1}>ID Proof</Label>
                        <Col sm={3}>
                            <div className='ml-2'>
                                <Input bsSize="lg" id="exampleSelect" name="select" type="select">
                                    <option>Select</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Input>
                            </div>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>ID Number</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <Row>
                        <Col>
                            <FormGroup row >
                                <Label for="exampleFile" sm={2}>Uplode ID Frount Side</Label>
                                <Col sm={8} className='mt-3'>
                                    <Input bsSize="lg" id="exampleFile" name="file" type="file" />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup row>
                                <Label for="exampleFile" sm={2}>Uplode ID Back Side</Label>
                                <Col sm={8} className='mt-3'>
                                    <Input bsSize="lg" id="exampleFile" name="file" type="file" />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup row >
                                <Label for="exampleFile" sm={2}>Uplode Admission Form</Label>
                                <Col sm={8} className='mt-3'>
                                    <Input bsSize="lg" id="exampleFile" name="file" type="file" />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup row>
                                <Label for="exampleFile" sm={2}>Student Image</Label>
                                <Col sm={8} className='mt-3'>
                                    <Input bsSize="lg" id="exampleFile" name="file" type="file" />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>

                    {/* <FormGroup row>
                        <Label for="exampleFile" sm={1}>Uplode Admission Form</Label>
                        <Col sm={4} className='mt-3'>
                            <Input bsSize="lg" id="exampleFile" name="file" type="file" />
                        </Col>
                    </FormGroup> */}

                    <FormGroup row>
                        <Label for="course" sm={1}>Phone</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="email" sm={1}>Email</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="email" name="email" placeholder="" type="email" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="text" sm={1}>Password</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="text" name="password" placeholder="" type="password" />
                        </Col>
                    </FormGroup>

                    <button class="button-8 m-3">Add Student</button>
                </Form>
            </div >
        </>
    )
}

export default AddStudent
