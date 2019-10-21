import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import './Menu.css'
import CadEmpresa from './CadEmpresa';
import Main from './main';



 class Menu extends Component{

     constructor(props){
         super(props)
         this.titleWasClicked = this.titleWasClicked.bind(this)
         
         this.state={
             num: ''
         };
     }

     titleWasClicked (event){

        let num = "a";
        
         event.preventDefault()
         const {dataCallbalck} = this.props
         
         if(num == "b"){
             dataCallbalck('deu certo')
        }else{
            dataCallbalck('deu errado')
        }



         
     }
    
    render(){


    return(
        <div className="Menu">
            <nav>
                <ul>
                    <li><a>Candidato</a>
                        <ul className="dropdown1">
                            <li><a onClick={this.titleWasClicked} >Cadastrar Candidato</a></li>
                            <li><a>Consultas do Candidato</a></li>
                        </ul>
                    </li>
                    <li><a>Empresa</a>
                        <ul className="dropdown1">
                            <li><a onClick={this.titleWasClicked}>Cadastrar Empresa</a></li>
                            <li><a>Consultas da Empresa</a></li>
                        </ul>
                    </li>
                    <li><a>Vagas</a>
                        <ul className="dropdown1">
                            <li><a onClick={this.titleWasClicked} id="b">Cadastrar Vagas</a></li>
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