import React, { Component } from 'react';
import '../../style/cardStyle.css';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

export default class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        }
        this.onSubmit = this.onSubmit.bind(this);
        this.modelclose = this.modelclose.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            email: this.state.email,
            password: this.state.password,
        };
        axios.post('http://localhost:4000/Reg/login', obj)
            .then(res => this.newMethod(res));
        this.state = {
            email: '',
            password: '',
        }
    }
    newMethod(res) {
        if (res.status === 200) {
            this.setState({
                prodectModel: true,
            })
            return console.log(res.data);
        }
    }
    modelclose() {
        return this.props.history.push("/");
    }
    render() {
        return (
            <form>

                <Modal.Dialog >

                    <Modal.Header>

                        <Modal.Title>USER</Modal.Title>
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
                        <Button variant="primary" type="submit" onClick={this.onSubmit} >LOGIN</Button>
                    </Modal.Footer>
                </Modal.Dialog>

                {/* < ProdectModel
                    prodectModel={this.state.prodectModel}
                /> */}
            </form>

        )
    }
}