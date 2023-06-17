import React, { useState, useRef } from 'react';
import { Label, Input, FormGroup, Form, Col } from 'reactstrap';
import JoditEditor from 'jodit-react';

const ContactStudent = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    return (
        <>
            <div className='AddStudent'>
                <Form>
                    <FormGroup row>
                        <Label for="course" sm={2}>Subject Name</Label>
                        <Col sm={5}>
                            <Input bsSize="lg" id="course" name="course" placeholder="" type="text" />
                        </Col>
                    </FormGroup>

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

                    <button class="button-8 m-3">Send Mail</button>
                </Form>
            </div >
        </>
    )
}

export default ContactStudent
