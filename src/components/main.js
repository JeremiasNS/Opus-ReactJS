import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import CadEmpresa from './CadEmpresa';
import CadCandidato from './CadCandidato/MainCadCandidato';
import CadVaga from './CadVaga';
import ReactDOM from 'react-dom';


import './main.css';


class Main extends Component{

  handleDataCallback(txtMsg) {
    alert(txtMsg)
    console.log(this)
    ReactDOM.render(<CadEmpresa/>, document.getElementById('middle'));

  }

  render (){

      return(
      <div className="Main">
        <header></header>
         <Menu dataCallbalck={this.handleDataCallback}/>
        <main>
          <div className="left"></div>
          <div className="middle">        
          </div>
          <div className="right"></div>
        </main>
        <Footer/>
      </div> 
      );
    }
}



export default Main; 