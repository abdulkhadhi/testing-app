import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
        }
        this.modelclose = this.modelclose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    // submit() {
    //     var userData = Object.assign({}, this.state);
    //     console.log(userData)
    // }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
        };
        axios.post('http://localhost:4000/Reg/add', obj)
            .then(res => this.newMethod(res));

        this.setState({
            email: '',
            password: '',
            name: '',
        })
    }
    newMethod(res) {
        return console.log(res.data);
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
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" value={this.state.name} onChange={e => this.setState({
                                    name: e.target.value,
                                })} />
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
        );

    }
}
