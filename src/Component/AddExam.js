import React from 'react'
import { Form } from 'react-bootstrap'
import { Label, Input, FormGroup, Col } from 'reactstrap';

function AddExam() {
    return (
        <>
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
                        <Label for="exampleSelect" sm={2}>Subcategory Name</Label>
                        <Col sm={3}>
                            <div className='ml-2'>
                                <Input bsSize="lg" id="exampleSelect" name="select" type="select">
                                    <option>Select Subcategory</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </div>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Subject Name</Label>
                        <Col sm={3}>
                            <div className='ml-2'>
                                <Input bsSize="lg" id="exampleSelect" name="select" type="select">
                                    <option>Select Subject</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </div>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={2}>Exam Name</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={2}>Exam Duration(In Minute)</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={2}>Passing Percentage(In%)</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={2}>RE Exam Day</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="checkbox2" sm={2}>Negative Marking</Label>
                        <Col className='ml-2' sm={{ size: 1 }}>
                            <FormGroup check>
                                <Input id="checkbox2" type="checkbox" />
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={2}>Terms & Condition</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <button class="button-8 m-3">Add Exam</button>
                </Form>
            </div >
        </>
    )
}

export default AddExam
