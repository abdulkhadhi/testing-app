import React, { Component } from 'react';
import '../App.css';
import { Modal } from 'react-bootstrap'
class Offer extends Component {
    render() {
        return (
            <div>
                {
                    this.props.showitem === true ?
                        <Modal.Dialog className="left-size" >
                            <Modal.Body>
                                {
                                    this.props.listvalue.map((item, index) => (
                                        <li key={index}>
                                            {item}
                                        </li>
                                    ))
                                }
                            </Modal.Body>
                        </Modal.Dialog> : ""
                }
            </div >
        )
    }
}
export default Offer;