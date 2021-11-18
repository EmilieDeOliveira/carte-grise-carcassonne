import React, { Component } from "react";
import { Col, Container, Row, Card, Table } from "react-bootstrap";

import './Mentions.css';

class Mentions extends Component {

  constructor(props){
    super(props);
  }

  render() {  
    return (
      <div className="mentions-legales">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">Mentions Légales</h2>

              <h3 id="identification">Identifications</h3>

              <div>Société S.A.R.L NTST Auto</div>
              <div>Inscrite au RCS de Cherbourg sous le numéro RCS 805 328 564</div>
              <div>Capital social de 5 000 €</div>
              <div>Siège social: 149 Chemin de Couly, 31330 Merville</div>
              <div>Numéro de téléphone : 04 68 79 39 65</div>
              <div>Email : cg.carcassonne11@gmail.com</div>

              <div>Directeur de la publication : Tapias Nicolas</div>


              <h3 id="contactOvh">Contact de l'hébergeur : OVH</h3>

              <div>Nom : OVH SAS</div>
              <div>Adresse: 2 rue Kellermann, 59100 Roubaix, France</div>
              <div>Téléphone: 0899 193 775 (1,35 € par appel puis 0,34 €/min)</div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}

export default Mentions;