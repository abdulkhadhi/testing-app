import React, { Component } from 'react';
import '../../style/cardStyle.css';
import { Modal } from 'react-bootstrap'
import UserRegister from "./Registeruser";
import AdminLogin from "./Admin";
export default class DropdownControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            AdminModel:false
        }
        this.modelclose = this.modelclose.bind(this);
    }
    modelclose() {
        this.setState({
            modal: false,
        })
    }
    getoption(item) {
        this.props.listvalue.map((e) => {
            if (e === item) {
                this.setState({
                    // modal: !this.state.modal,
                    AdminModel: !this.state.AdminModel
                })
            }
        })
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
                <UserRegister
                    modal={this.state.modal}
                    close={this.modelclose}
                />
                <AdminLogin
                    AdminModel={this.state.AdminModel}
                />
            </div>

        )
    }
}