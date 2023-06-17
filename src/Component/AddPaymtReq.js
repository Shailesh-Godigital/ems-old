import React from 'react'
import { Row, Label, Input, FormGroup, Col, Form } from 'reactstrap';

const AddPaymtReq = () => {
    return (
        <>
            <div className='AddStudent m-5'>
                <Form>
                    <FormGroup row>
                        <Label for="course" sm={1}>Number of Student</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>Amount</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="course" sm={1}>Description</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

                    <FormGroup row >
                        <Label for="exampleFile" sm={1}>File Uplode</Label>
                        <Col sm={5} className='mt-2'>
                            <Input bsSize="lg" id="exampleFile" name="file" type="file" />
                        </Col>
                    </FormGroup>




                    <button class="button-8 m-3">Add Payment</button>
                </Form>
            </div >
        </>
    )
}

export default AddPaymtReq
