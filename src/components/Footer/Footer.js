import React, { Component } from "react";

import './Footer.css';

class Footer extends Component {

  constructor(props){
    super(props);
  }

  render() {  
    return (
      <div className="Footer text-center">
       © 2020 CarteGriseCarcassonne. Tous Droits Réservés . 
       <a href="./mentions-legales" id="ml"> Mentions légales</a>
      </div>
    )
  }

}

export default Footer;