import React, { Component, useState } from 'react';
import './cadempresa.css';
import api from '../Services/api'


export default function CadEmpresa() {

    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [areaAtuacao, setAreaAtuacao] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tipoEndereco, setTipoEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState('');
    const [telComercial, setTelComercial] = useState('');
    const [fax, setFax] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        
        const response = await api.post('/empresa', {
            nome,
            login,
            senha,
            email,
            cnpj,
            razaoSocial,
            areaAtuacao,
            endereco,
            tipoEndereco,
            bairro,
            cep,
            telComercial,
            fax,
        });
        
    }

    return (
        <div className="CadEmpresa">
            <h1>Dados Empresariais</h1>
            <form className="form1" onSubmit={handleSubmit}>
                <p>Os Campos do formulário que possuem asteristico são obrigatórios</p>
                <fieldset>
                    <legend>Acesso</legend>
                    <label>*Login: (somente letras e números)</label><br />
                    <input type="text"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    ></input><br />
                    <label>*Senha:</label><br />
                    <input type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    ></input><br />
                    <label>Redigite a senha: </label><br />
                    <input
                        type="password"></input><br />
                </fieldset>

                <fieldset>
                    <legend>Informações do Proprietário</legend>
                    <div className="GridLayout1">
                        <label>*Razão social: </label><br />
                        <input
                            value={razaoSocial}
                            onChange={e => setRazaoSocial(e.target.value)}
                            type="text"></input><br />
                        <label>*CNPJ: (Somente números): </label><br />
                        <input
                            value={cnpj}
                            onChange={e => setCnpj(e.target.value)}
                            type="number"></input><br />
                    </div>

                    <label>*Área de atuação: </label><br />
                    <input
                        value={areaAtuacao}
                        onChange={e => setAreaAtuacao(e.target.value)}
                        type="text"></input><br />

                    <label>*Endereço: </label><br />
                    <input
                        value={endereco}
                        onChange={e => setEndereco(e.target.value)}
                        type="text"></input><br />
                    <label>*Tipo de Endereço: </label><br />
                    <input
                        value={tipoEndereco}
                        onChange={e => setTipoEndereco(e.target.value)}
                        type="text"></input><br />

                    <div className="InlineLayout1">
                        <label>*Bairro: </label><br />
                        <input
                            value={bairro}
                            onChange={e => setBairro(e.target.value)}
                            type="text"></input><br />
                        <label>*Cidade: </label><br />
                        <input type="text"></input><br />
                    </div>

                    <label>*CEP: (Somente números)</label><br />
                    <input
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                        type="number"></input><br />
                </fieldset>

                <fieldset>
                    <legend>Contato</legend>

                    <label>*E-mail: </label><br />
                    <input type="email"></input><br />
                    <label>*Confirme o seu e-mail: </label><br />
                    <input type="email"></input><br />

                    <label>*Telefone comercial: (somente números / com DDD) </label><br />
                    <input
                        value={telComercial}
                        onChange={e => setTelComercial(e.target.value)}
                        type="tel" placeholder="(DD)0000-0000"></input><br />
                    <label>Fax: (somente números / com DDD) </label><br />
                    <input
                        value={fax}
                        onChange={e => setFax(e.target.value)}
                        type="tel" placeholder="(DD)0000-0000"></input><br />
                    <label>Desejo receber notícias por e-mail</label><br />
                    <input type="checkbox" /><br />
                </fieldset>

                <input className="BtnEnviar" type="submit" value="Enviar"></input>
            </form>

        </div>
    );
}