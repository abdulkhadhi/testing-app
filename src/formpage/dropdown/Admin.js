import React, { Component } from 'react';
import '../../style/cardStyle.css';
import { Modal, Button, Form } from 'react-bootstrap'
export default class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
        }
    }
    render() {
        return (
            <form>
                {
                    this.props.AdminModel === true ?
                        <Modal.Dialog >

                            <Modal.Header>

                                <Modal.Title>ADMIN</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={e => this.setState({
                                    email: e.target.value
                                })} />
                                <Form.Label>password </Form.Label>
                                <Form.Control type="password" placeholder="Enter password" value={this.state.password} onChange={e => this.setState({
                                    password: e.target.value
                                })} />

                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.modelclose}>Close</Button>
                                <Button variant="primary" type="submit" onClick={this.onSubmit} >Save changes</Button>
                            </Modal.Footer>
                        </Modal.Dialog> : ""
                }
            </form>

        )
    }
}