import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import './Menu.css'
import CadEmpresa from './CadEmpresa';
import Main from './main';



 class Menu extends Component{

     constructor(props){
         super(props)
         this.titleWasClickedCad = this.titleWasClickedCad.bind(this)
         this.titleWasClickedEmp = this.titleWasClickedEmp.bind(this)
         this.titleWasClickedVag = this.titleWasClickedVag.bind(this)
         
         this.state={
             num: ''
         };
     }

     titleWasClickedCad (event){
         event.preventDefault()
         const {dataCallbalck} = this.props
             dataCallbalck('candidato')
     }

     titleWasClickedEmp (event){
         event.preventDefault()
         const {dataCallbalck} = this.props
             dataCallbalck('empresa')
     }
    
    titleWasClickedVag (event){
        event.preventDefault()
        const {dataCallbalck} = this.props
            dataCallbalck('vaga')
    }

    render(){
    return(
        <div className="Menu">
            <nav>
                <ul>
                    <li><a>Candidato</a>
                        <ul className="dropdown1">
                            <li><a onClick={this.titleWasClickedCad} >Cadastrar Candidato</a></li>
                            <li><a>Consultas do Candidato</a></li>
                        </ul>
                    </li>
                    <li><a>Empresa</a>
                        <ul className="dropdown1">
                            <li><a onClick={this.titleWasClickedEmp}>Cadastrar Empresa</a></li>
                            <li><a>Consultas da Empresa</a></li>
                        </ul>
                    </li>
                    <li><a>Vagas</a>
                        <ul className="dropdown1">
                            <li><a onClick={this.titleWasClickedVag} >Cadastrar Vagas</a></li>
                            <li><a>Consultas de Vagas</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
} 
export default Menu;