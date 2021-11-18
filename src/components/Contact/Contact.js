import React, { Component } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import PhoneNumber from 'react-phone-number';

import './Contact.css';

import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';
import position from '../../assets/icons/geo.png';


const mapStyles = {
  width: 'auto',
  height: 'auto'
};

class Contact extends Component {

  constructor(props){
    super(props);
  }

  render() {  
    return (
      <div className="contact" id="contact">
        <Container>
          <Row>
            <Col md>
              <h2 className="text-center" id="rdv"> Prendre RDV </h2>
              <div id="rdvItem">
                <Row id='rdvItem1'>
                  <Col xs={2}><Image src={phone} /></Col>
                  <Col><PhoneNumber className="phone" number="04 68 79 39 65" isLinked={true}/><br/><PhoneNumber className="phone" number="07 88 43 90 54" isLinked={true}/></Col>
                </Row>
                <Row id='rdvItem1'>
                  <Col xs={2}><Image src={email} /></Col>
                  <Col><p>cg.carcassonne11@gmail.com</p></Col>
                </Row>
                <Row id='rdvItem1'>
                  <Col xs={2}><Image src={position} /></Col>
                  <Col><p>57 rue Aimé Ramond<br/>11000 Carcassonne</p></Col>
                </Row>

                
              </div>
            </Col>
            <Col md id="maps">
              <div >
                <Map 
                  google={this.props.google}
                  zoom={17}
                  style={mapStyles}
                  initialCenter={
                    {
                      lat: 43.211838,
                      lng: 2.351032
                    }
                  }>
                  <Marker
                  title={'57 rue Aimé Ramond, 11000 Carcassonne'}
                  name={'Carte Grise'}
                  position={{
                    lat: 43.211838,
                    lng: 2.351032
                  }} />
                  </Map>
              </div>
            </Col>
          </Row>
        </Container>
        
      </div>
    )
  }

}

export default GoogleApiWrapper({
  apiKey: process.env.PRIVATE_KEY_GOOGLE
})(Contact);