import React, { Component } from 'react';
import '../../style/cardStyle.css';
import { Modal } from 'react-bootstrap'

export default class DropdownControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            AdminModel: false,
            UserLoginmodel: false,
        }
    }
    getoption(item) {
        if ("userlogin" === item) {
            return this.props.history.history.push("/" + item);
        }
        if ("register" === item) {
            return this.props.history.history.push("/" + item);
        }
        if ("Adminlogin" === item) {
            return this.props.history.history.push("/" + item);
        }
    }
    render() {
        return (
            <div>
                {
                    this.props.dropdown === true ?
                        <Modal.Dialog className="left-size" >
                            <Modal.Body>
                                {
                                    this.props.listvalue.map((item, index) => (
                                        <li className="li" onClick={() => { this.getoption(item) }} key={index}>
                                            {item}
                                        </li>
                                    ))
                                }
                            </Modal.Body>
                        </Modal.Dialog> : ""
                }
            </div>

        )
    }
}