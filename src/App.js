import React, { Component } from 'react';
import './App.css';
// import { Modal as ReactOverlayModal } from 'react-overlays'
import Offer from './formpage/Offer';
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
       <Offer
        showitem = {this.state.showitem}
        listvalue = {this.state.listvalue}
       />
       <LoginPage 
       
       />
      </div>
    );
  }
}

export default App;
