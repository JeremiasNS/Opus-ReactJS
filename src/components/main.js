import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';



import './main.css';


class Main extends Component{

  handleDataCallback(txtMsg) {
    alert(txtMsg)
    console.log(this)
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