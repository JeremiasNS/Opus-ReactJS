import React  from 'react';
import DadosPessoais from './DadosPessoais';
import ExpProfissional from './ExpProfissional';
import './maincadcandidato.css';

export default function CadCandidato(){
    return(
        <div className="CadCandidato">
            <DadosPessoais/>
            <ExpProfissional/>
        </div>
    );
}