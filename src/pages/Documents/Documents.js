import React, { Component } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

import './Documents.css'

class Documents extends Component {

  constructor(props){
    super(props);
  }

  render() {  
    return (
      <div className='Documents'>
        <Container>
          <Card id="cardDoc">
            <div className="title"><h2>Carte grise</h2></div>
              <Card.Body>
              <Card.Text>
                <p><font color="#11487b" face='Source Sans Pro Black'>Carte grise originale</font></p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Pièce d'identité:</font> carte nationale d'identité ou passeport du ou des titulaires</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Permis de conduire </font>du ou des titulaires</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Assurance en cours de validité: </font>carte verte ou provisoire</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Justificatif de domicile: </font>facture d'eau, d'électricité, de téléphone, assurance d'habitation ..</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Contrôle technique </font>de moins de 6 mois</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Cession de véhicule</font></p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="cardDoc">
            <div className="title"><h2>Carte grise étrangère</h2></div>
              <Card.Body>
              <Card.Text>
                <p><font color="#11487b" face='Source Sans Pro Black'>Carte grise originale étrangère</font></p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Pièce d'identité:</font> carte nationale d'identité ou passeport du ou des titulaires</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Permis de conduire </font>du ou des titulaires</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Assurance en cours de validité: </font>carte verte ou provisoire</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Justificatif de domicile: </font>facture d'eau, d'électricité, de téléphone, assurance d'habitation ..</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Contrôle technique </font>de moins de 6 mois</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Cession de véhicule</font></p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Certificat de conformité européen</font></p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Quitus fiscal</font></p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="cardDoc">
            <div className="title"><h2>Duplicata de carte grise</h2></div>
              <Card.Body>
              <Card.Text>
                <p><font color="#11487b" face='Source Sans Pro Black'>Pièce d'identité:</font> carte nationale d'identité ou passeport du ou des titulaires</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Permis de conduire </font>du ou des titulaires</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Assurance en cours de validité: </font>carte verte ou provisoire</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Justificatif de domicile: </font>facture d'eau, d'électricité, de téléphone, assurance d'habitation ..</p>
                <p><font color="#11487b" face='Source Sans Pro Black'>Contrôle technique </font>de moins de 6 mois</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    )
  }

}

export default Documents;