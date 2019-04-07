import React, { Component } from 'react';
import '../../style/cardStyle.css';
import { Modal } from 'react-bootstrap'
import UserRegister from "./Registeruser";
import AdminLogin from "./Admin";
import UserLogin from "./Userlog";
export default class DropdownControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            AdminModel: false,
            UserLoginmodel: false,
        }
        this.modelclose = this.modelclose.bind(this);
    }
    modelclose() {
        this.setState({
            modal: false,
            AdminModel: false,
            UserLoginmodel: false,
        })
    }
    getoption(item) {
        if ("user login" === item) {
            this.setState({
                UserLoginmodel: !this.state.UserLoginmodel,
                modal: false,
                AdminModel: false,
            })
        }
        if ("register" === item) {
            this.setState({
                modal: !this.state.modal,
                AdminModel: false,
                UserLoginmodel: false,
            })
        }
        if ("Admin" === item) {
            this.setState({
                AdminModel: !this.state.AdminModel,
                modal: false,
                UserLoginmodel: false,
            })
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
                <UserRegister
                    modal={this.state.modal}
                    RegModelclose={this.modelclose}
                />
                <AdminLogin
                    AdminModel={this.state.AdminModel}
                    AdminModelclose={this.modelclose}
                />
                <UserLogin
                    User={this.state.UserLoginmodel}
                    UserLogModel={this.modelclose}
                />
            </div>

        )
    }
}