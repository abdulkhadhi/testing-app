import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.modelclose= this.modelclose.bind(this);
    }
    submit() {
        var userData = Object.assign({}, this.state);
        console.log(userData)
    }
    modelclose() {
        this.props.close();
    }
    render() {
        return (
            <form>
                {
                    this.props.modal === true ?
                        <Modal.Dialog >
                            
                            <Modal.Header>

                                <Modal.Title>REGISTER</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                                <Form.Label>password </Form.Label>
                                <Form.Control type="password" placeholder="Enter password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />

                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.modelclose}>Close</Button>
                                <Button variant="primary" type="submit" onClick={() => { this.submit() }} >Save changes</Button>
                            </Modal.Footer>
                        </Modal.Dialog> : ""
                }
            </form>
        );

    }
}
