import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CadEmpresa from './components/CadEmpresa/CadEmpresa';
import CadVaga from './components/CadVaga';
import CadCandidato from './components/CadCandidato/MainCadCandidato';
import Main from './components/Main/main';

export default function  Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Main}/>
            <Route path="/cadempresa" component={CadEmpresa}/>
            <Route path="/cadvaga" component={CadVaga}/>
            <Route path="/cadcandidato" component={CadCandidato}/>
        </BrowserRouter>
    );
}