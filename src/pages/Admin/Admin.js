import React, { Component } from "react";
import { Col, Container, Row, Card, Table } from "react-bootstrap";
import * as APIConfig from '../../constants/APIConfig';
import path from 'path';

import './Admin.css';

import tarifs from '../Tarifs/tarifstable.json';
const taxe = path.join(__dirname, '../../taxe.json');


class Admin extends Component {

  constructor(props){

    super(props);
    this.state={
      taxe: 0
    };
  }

  handleSubmit(){
    fetch(
			`${APIConfig.API_URI}/taxe`,
			{
				method: 'POST',
        body: JSON.stringify({ taxe: this.state.taxe }),
				headers: APIConfig.HEADERS,
			},
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Error - 404 Not Found')
				}
				return response.json()
			})
  }

  render() {  
    return (
      <div className="Tarifs">
      <div>{taxe.taxe}</div>
        <Container>
          <Row>
            <Col>
              <label>
                Taxe :
                <input type="number" name="taxe" value={this.state.taxe} onChange={(e) => {this.setState({taxe:  e.target.value}); console.log(this.state.taxe);}}/>
              </label>
              <button onClick={() => this.handleSubmit()}>Enregistrer</button>

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
                <td>{(value[0]+4).toString().replace(".", ",")} €</td>
                <td>{value[1]} €</td>
                <td>{value[2]} €</td>
                <td>{value[3]} €</td>
                <td>{value[4]} €</td>
                <td>{value[5]} €</td>
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

export default Admin;