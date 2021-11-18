import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, Carousel, Image } from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

import locaux1 from '../../assets/images/IMG_0023.JPG';
import locaux2 from '../../assets/images/IMG_0025.JPG';
import locaux3 from '../../assets/images/IMG_0031.JPG';

import iconCheck from '../../assets/icons/check.png';
import card from '../../assets/icons/credit-card.png';
import time from '../../assets/icons/time.png';
import position from '../../assets/icons/position.png';


import './Home.css';

class Home extends Component {

  render() {  
    return (
      <div className="Home">
        <div className="page">
          <div className="content-table">
            <Container>              
                <h1 className="titre">
                SERVICE DE CARTE GRISE A CARCASSONNE
                </h1>
                <Button id="contactButton" href="/#contact">
                  CONTACTEZ NOUS
                </Button>
            </Container>
          </div>
        </div>

        <div id="info">
          <Container>
            <Row className="text-center">
              <Col>
                <div>
                  <Image src={position} /><br/>
                  57 rue Aimé Ramond <br/>
                  11000 Carcassonne
                </div>
              </Col>
              <Col>
                <div>
                  <Image src={time} /><br/>
                  Mardi au Vendredi<br/> 15h - 19h<br/>
                  Samedi<br/> 9h - 13h
                </div>
              </Col>
              <Col>
                <div>
                  <Image src={card} /><br/>
                  Carte banquaire<br/>
                  Espèce<br/>
                  Chèque
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div id="services">
          <Container>
            <Row>
            <Col lg id="servicesCol">

                <Card id="servicesCard">
                  <Card.Body>
                  <h2 className="text-center titleCard">Nos Services</h2>

                    <Card.Text>
                      <Container>
                        <Row className="servicesList">
                          <div><Image src={iconCheck} />Carte grise</div>
                          <div><Image src={iconCheck} />Carte grise collection</div>
                          <div><Image src={iconCheck} />Enregistrement cession </div>
                          <div><Image src={iconCheck} />Enregistrement déclaration d'achat </div>
                          <div><Image src={iconCheck} />Changement d'adresse </div>
                          <div><Image src={iconCheck} />Certificat de non-gage </div>
                          <div><Image src={iconCheck} />Fiche d'identification </div>
                          <div><Image src={iconCheck} />Duplicata carte grise </div>
                          <div><Image src={iconCheck} />Certificat provisoire WW garage </div>
                          <div><Image src={iconCheck} />Carte grise étrangère </div>
                        </Row>
                      </Container>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={locaux1}
                      alt="First slide"

                    />
                    <Carousel.Caption>
                      <h2>Nos locaux</h2>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={locaux2}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h2>Nos locaux</h2>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={locaux3}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h2>Nos locaux</h2>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
              
            </Row>
          </Container>
        </div>
        <Contact/>
      </div>
    );
  }
}

export default Home;
