import React  from 'react';
import DadosPessoais from './DadosPessoais'
import ExpProfissional from './ExpProfissional'

export default function CadCandidato(){
    return(
        <div className="CadCandidato">
            <DadosPessoais/>
            <ExpProfissional/>
        </div>
    );
}