import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import logo from '../logo/logo.png';
import '../style/cardStyle.css';
import axios from 'axios';
const json = require("../data/checkcard.json");

export default class CardDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: '',
        }
    }
    componentWillMount() {
        axios.get('http://localhost:4000/Reg/carddata')
            .then(res => this.newMethod(res));
    }
    newMethod(res) {
        if (res.status === 200) {
            this.setState({
                cardData: res.data,
            })
            // return console.log(res.data);
        }
    }
    render() {
        return (
            <div>
                {this.props.showitem === false ?
                    this.state.cardData !== "" ?
                        <div>{this.state.cardData.map(i =>
                            <Card className="size">
                                <Card.Body>
                                    {/* <Card.Title>MOBILE</Card.Title> */}
                                    <Card.Img variant="top" src={logo} />
                                    <Card.Text>
                                        {i.Modalname}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Rs.12500</small>
                                </Card.Footer>
                            </Card>
                        )}</div>
                        : ""
                    : ""
                }

            </div>
        )
    }
}