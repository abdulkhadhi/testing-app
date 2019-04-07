import React, { Component } from 'react';
import '../../style/cardStyle.css';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

export default class ProdectModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Modalname: "",
            color: "",
            simpletype: "",
            displaySize: "",
            Resolution: "",
            os: "",
            protecttype: "",
            internalstroage: "",
            Ram: "",
            frontcamera: "",
            flash: "",
            networktype: "",
            supportnetwork: "",
            battery: "",
            warranty: ""
        }
    }
    render() {

        return (
            this.props.prodectmodel === true ?
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
              </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
            </Button>
                </Form> :""
        )
    }
}