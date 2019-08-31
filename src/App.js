import React, { Component } from 'react';
import './App.css';
import { Form, Image, Button, FormControl } from 'react-bootstrap'
import Offer from './formpage/Offer';
import CardDisplay from "./formpage/CardView";
import DropdownControl from "./formpage/dropdown/dropdown";
import logo from './logo/logo.png';

const datajs = require('./data/datajs.json');


// var Modal = require('react-bootstrap-modal');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listvalue: [],
      showitem: false,
      card: false,
      response: '',
      dropdown: false
    }

  }

  getoption(e) {
    var listvalue
    if (e.id === "offer") {
      // eslint-disable-next-line array-callback-return
      datajs.property.map(e1 => {
        if (e1.id === e.id) {
          return listvalue = e1.choice
        }
      })
      this.Offerstatechang(listvalue);
    }
    if (e.id === "login") {
      datajs.property.map(e1 => {
        if (e1.id === e.id) {
          return listvalue = e1.choice
        }
      })
      this.Loginstatechange(listvalue);
    }

  };
  Offerstatechang(listvalue) {
    this.setState({
      listvalue: listvalue,
      showitem: !this.state.showitem,
      dropdown: false
    })
  }
  Loginstatechange(listvalue) {
    this.setState({
      listvalue: listvalue,
      dropdown: !this.state.dropdown,
      showitem: false
    })
  }

  drop(e) {
    this.setState({
      dropdown: !this.state.dropdown
    })
  }
  render() {
    return (
      <div className="App">
        <ul>
          {
            datajs.property.map(e => <li className="click left bg" onClick={() => { this.getoption(e) }}>
              {e.displayname}
            </li>
            )}
          <Image src={logo} width="21%" fluid />
          <div class="topnav-right">
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
        </ul>
        <Offer
          showitem={this.state.showitem}
          listvalue={this.state.listvalue}
        />
        <DropdownControl
          dropdown={this.state.dropdown}
          listvalue={this.state.listvalue}
        />
        <CardDisplay
          // modal={this.state.modal}
          showitem={this.state.card}
        />
      </div>
    );
  }
}

export default App;
