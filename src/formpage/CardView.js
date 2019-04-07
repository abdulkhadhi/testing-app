import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import logo from '../logo/logo.png';
import '../style/cardStyle.css';

export default class CardDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.modal === false ?
                    <Card className="size">
                        <Card.Body>
                            {/* <Card.Title>MOBILE</Card.Title> */}
                            <Card.Img variant="top" src={logo} />
                            <Card.Text>
                                Redmi mobile offer for only u
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Rs.12500</small>
                        </Card.Footer>
                    </Card> : ""
                }
               
            </div>
        )
    }
}