import React from 'react'
import { Row, Label, Input, FormGroup, Col, Form } from 'reactstrap';

const AddEditBook = () => {
    return (
        <>
            <div className='AddStudent m-5'>
                <Form>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={1}>Category Name</Label>
                        <Col sm={3}>
                            <div className='ml-2'>
                                <Input bsSize="lg" id="exampleSelect" name="select" type="select">
                                    <option>Select</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </div>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>Book Name</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row >
                        <Label for="exampleFile" sm={1}>Cover Image</Label>
                        <Col sm={5} className='mt-2'>
                            <Input bsSize="lg" id="exampleFile" name="file" type="file" />
                        </Col>
                    </FormGroup>




                    <button class="button-8 m-3">Save</button>
                </Form>
            </div >
        </>
    )
}

export default AddEditBook
