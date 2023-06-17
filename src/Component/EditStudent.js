import React from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'

function EditStudent() {
    return (
        <>
            <div className='list'>
                <Row>
                    <Col>
                        <h2>Edit Student</h2>
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                        {/* <Button style={{ backgroundColor: "#1188A6", fontFamily: "'Montserrat', sans-serif" }}>Add Student</Button>&nbsp; */}
                    </Col>
                </Row>
            </div >

            <Form className="form-container mt-2 p-5" style={{ backgroundColor: "#D9ECF1", borderRadius: "5px" }}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder='First Name' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control placeholder='Middle Name' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder='Last Name' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Class</Form.Label>
                                <Form.Control placeholder='Class' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Roll Number</Form.Label>
                                <Form.Control placeholder='Roll Number' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Father Name</Form.Label>
                                <Form.Control placeholder='Father Name' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Mother Name</Form.Label>
                                <Form.Control placeholder='Mother Name' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Section</Form.Label>
                                <Form.Control placeholder='Section' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder='Email' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder='Address' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder='City' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>State</Form.Label>
                                <Form.Control placeholder='State' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Pin Code</Form.Label>
                                <Form.Control placeholder='Pin Code' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Country</Form.Label>
                                <Form.Control placeholder='Country' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control placeholder='Mobile Number' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button className='mt-3 mb-5' style={{ backgroundColor: "#1188A6", fontFamily: "'Montserrat', sans-serif" }}>Update</Button>{' '}
                </Container>
            </Form>
        </>
    )
}

export default EditStudent
