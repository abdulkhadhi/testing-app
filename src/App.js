import React, { Component } from 'react';
import './App.css';
// import { Modal as ReactOverlayModal } from 'react-overlays'
import { Modal, Button } from 'react-bootstrap'
const datajs = require('./data/datajs.json');

// var Modal = require('react-bootstrap-modal');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listvalue: [],
      showitem: false
    }
  }
  getoption(name) {
    var listvalue
    if (name = "offer") {
      datajs.property.map(e1 => {
        if (e1.id === name) {
          listvalue = e1.choice
        }
      })
    }
    this.setState({
      listvalue: listvalue,
      showitem: !this.state.showitem
    })
  };
  render() {
    return (
      <div className="App">
        <ul>
          {
            datajs.property.map(e => <li className="click left" onClick={() => { this.getoption(e.id) }}>
              {e.id}
            </li>
            )}
        </ul>
        {this.state.showitem === true ?
          <div >
            <Modal.Dialog className="left-size" >
              <Modal.Body>
                {
                  this.state.listvalue.map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  ))
                }
              </Modal.Body>
            </Modal.Dialog>
          </div>
          : ""}
      </div>
    );
  }
}

export default App;
