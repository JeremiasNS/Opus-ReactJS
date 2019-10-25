import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import CadEmpresa from '../CadEmpresa/CadEmpresa';
import CadCandidato from '../CadCandidato/MainCadCandidato';
import CadVaga from '../CadVaga';
import ReactDOM from 'react-dom';



import './main.css';


class Main extends Component{
  
  handleDataCallback(txtMsg) {

    if(txtMsg == "empresa"){
      ReactDOM.render(<CadEmpresa />, document.getElementById('middle'));
    }else if(txtMsg == "vaga"){
      ReactDOM.render(<CadVaga />, document.getElementById('middle'));
    }else if(txtMsg == "candidato"){
      ReactDOM.render(<CadCandidato />, document.getElementById('middle'));
    }
    
  }
  
  render (){
    return(
      <div className="Main">
        <header></header>
         <Menu dataCallbalck={this.handleDataCallback}/>
        <main>
          <div className="left"></div>
          <div id="middle" className="body"></div>
          <div className="right"></div>
        </main>
        <Footer/>
      </div> 
      );
    }
  }


  export default Main; 
 


