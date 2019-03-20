import React, { Component } from 'react';
import './App.css';
// import { Modal as ReactOverlayModal } from 'react-overlays'
import Offer from './formpage/Offer';
import LoginPage from "./formpage/LoginPage.1";
const datajs = require('./data/datajs.json');

// var Modal = require('react-bootstrap-modal');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listvalue: [],
      showitem: false,
      modal: false,
      response: '',
    }
    this.modelclose = this.modelclose.bind(this);
  }
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }
  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };
  getoption(name) {
    var listvalue
    if (name === "offer") {
      // eslint-disable-next-line array-callback-return
      datajs.property.map(e1 => {
        if (e1.id === name) {
         return listvalue = e1.choice
        }
      })
      this.statechang(listvalue);
    }
    if (name === "login") {
      this.setState({
        modal: !this.state.modal,
        showitem: false,
      })
    }

  };
  statechang(listvalue) {
    this.setState({
      listvalue: listvalue,
      showitem: !this.state.showitem,
      modal: false,
    })
  }
  modelclose() {
    this.setState({
      modal: false,
    })
  }
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
        <p>{this.state.response}</p>
        <Offer
          showitem={this.state.showitem}
          listvalue={this.state.listvalue}
        />
        <LoginPage
          modal={this.state.modal}
          close={this.modelclose}
        />
      </div>
    );
  }
}

export default App;
