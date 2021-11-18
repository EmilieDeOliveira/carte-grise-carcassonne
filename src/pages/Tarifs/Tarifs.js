import React, { Component } from "react";
import { Col, Container, Row, Card, Table } from "react-bootstrap";

import './Tarifs.css';

import tarifs from './tarifstable.json';

class Tarifs extends Component {

  constructor(props){
    super(props);
  }

  render() {  
    return (
      <div className="Tarifs">
        <Container>
          <Row>
            <Col>
          <Card id="card">
            <Card.Body>
            <h2 className="text-center">Nos tarifs</h2>
              <Card.Text>
                <Row>
                  <Col>Carte grise</Col>
                  <Col className="prixServices">28€</Col>
                </Row>
                <Row>
                  <Col>Enregistrement cession</Col>
                  <Col className="prixServices">5€</Col>
                </Row>
                <Row>
                  <Col>Enregistrement déclaration d'achat</Col>
                  <Col className="prixServices">5€</Col>
                </Row>
                <Row>
                  <Col>Changement d'adresse</Col>
                  <Col className="prixServices">5€</Col>
                </Row>
                <Row>
                  <Col>Certificat de non-gage</Col>
                  <Col className="prixServices">5€</Col>
                </Row>
                <Row>
                  <Col>Fiche d'identification</Col>
                  <Col className="prixServices">28€</Col>
                </Row>
                <Row>
                  <Col>Duplicata carte grise</Col>
                  <Col className="prixServices">95€</Col>
                </Row>
                <Row>
                  <Col>Certificat provisoire WW garage</Col>
                  <Col className="prixServices">75€</Col>
                </Row>
                <Row>
                  <Col>Carte grise étrangère</Col>
                  <Col className="prixServices">Devis</Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>

            <h2 className="text-center taxeTitle"> Aude et la taxe régionale </h2>
            <Table striped bordered hover responsive size="sm">
            <thead>
              <tr id="first">
                <th>Puissance fiscale</th>
                <th colSpan="2">Véhicules de tourisme (VP)</th>
                <th colSpan="2">Utilitaire inférieur ou égal à 3,5 tonnes de PTAC (CTTE, VASP)</th>
                <th colSpan="2">Moto (MTL, MTT 1 et MTT 2)</th>
              </tr>
              <tr id="second">
                <th></th>
                <th>&lt; 10 ans</th>
                <th>+ 10 ans</th>
                <th>&lt; 10 ans</th>
                <th>+ 10 ans</th>
                <th>&lt; 10 ans</th>
                <th>+ 10 ans</th>
              </tr>
            </thead>
            <tbody>
              {tarifs.tarifs.map((value, index) => {
                return <tr>
                <td className="id">{index+1}</td>
                <td>{(value[0]+tarifs.taxes).toString().replace(".", ",")} €</td>
                <td>{(value[1]+tarifs.taxes).toString().replace(".", ",")} €</td>
                <td>{(value[2]+tarifs.taxes).toString().replace(".", ",")} €</td>
                <td>{(value[3]+tarifs.taxes).toString().replace(".", ",")} €</td>
                <td>{(value[4]+tarifs.taxes).toString().replace(".", ",")} €</td>
                <td>{(value[5]+tarifs.taxes).toString().replace(".", ",")} €</td>
              </tr>
              })}
            </tbody>
          </Table>
          </Col>
          </Row>
        </Container>
      </div>
    )
  }

}

export default Tarifs;