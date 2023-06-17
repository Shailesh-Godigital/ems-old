import React from 'react'
import { Label, Input, FormGroup, Form, Col } from 'reactstrap';

const AddUser = () => {
    return (
        <>
            <div className='AddStudent'>
                <Form>
                    <FormGroup row>
                        <Label for="email" sm={1}>User Email</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="email" name="email" placeholder="" type="email" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>User Name</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="text" sm={1}>User Password</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="text" name="password" placeholder="" type="password" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleSelect" sm={1}>User Role</Label>
                        <Col sm={3}>
                            <div className='ml-2'>
                                <Input bsSize="lg" id="exampleSelect" name="select" type="select">
                                    <option>None</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </div>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>Permission?</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <button class="button-8 m-3">Add User</button>
                </Form>
            </div >
        </>
    )
}

export default AddUser
