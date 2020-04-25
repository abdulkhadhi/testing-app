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
            warranty: "",
            image: "",
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.modelclose = this.modelclose.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Modalname: this.state.Modalname,
            color: this.state.color,
            image: this.state.image
        };
        axios.post('http://localhost:4000/Reg/prodectadded', obj)
            .then(res => this.newMethod(res));

        this.setState({
            Modalname: '',
            color: '',
        })
    }
    newMethod(res) {
        return console.log(res.data);
    }
    modelclose() {
        this.props.adminModelclose()
    }
    render() {
        return (
            <div>
                {
                    this.props.prodectmodel === true ?
                        <Modal.Dialog >
                            <Modal.Header>
                                <Modal.Title>prodectmodel</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Label>Modalname</Form.Label>
                                <Form.Control type="text" placeholder="Enter Modalname" value={this.state.Modalname} onChange={e => this.setState({
                                    Modalname: e.target.value
                                })} />
                                <Form.Label>color </Form.Label>
                                <Form.Control type="text" placeholder="Enter color" value={this.state.color} onChange={e => this.setState({
                                    color: e.target.value
                                })} />
                                <Form.Label>image </Form.Label>
                                <Form.Control type="file" placeholder="Enter file" value={this.state.image} onChange={e => this.setState({
                                    image: e.target.value[0]
                                })} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.modelclose}>cancel</Button>
                                <Button variant="primary" type="submit" onClick={this.onSubmit} >submit</Button>
                            </Modal.Footer>
                        </Modal.Dialog> : ""
                }
            </div>

        )
    }
}