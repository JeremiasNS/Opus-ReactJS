import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css'
import CadEmpresa from './CadEmpresa';
import Main from './main';



 export default function Menu() {
    return(
        <div className="Menu">
            <nav>
                <ul>
                    <li><a>Candidato</a>
                        <ul className="dropdown1">
                            <li><a >Cadastrar Candidato</a></li>
                            <li><a>Consultas do Candidato</a></li>
                        </ul>
                    </li>
                    <li><a>Empresa</a>
                        <ul className="dropdown1">
                            <li><a href="#" handleClick={Main.ok}>Cadastrar Empresa</a></li>
                            <li><a>Consultas da Empresa</a></li>
                        </ul>
                    </li>
                    <li><a>Vagas</a>
                        <ul className="dropdown1">
                            <li><a>Cadastrar Vagas</a></li>
                            <li><a>Consultas de Vagas</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}