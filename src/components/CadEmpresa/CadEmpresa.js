import React, {Component, useState} from 'react';
import './cadempresa.css';
import api from '../Services/api'


 export default function CadEmpresa (){
        
    const [username, setUserName] = useState('');
        
        const acesso = {
        login:'',
        senha:'',
        email:'',
        receberNoticias:true
        }


            const empresa = {
            nome: '',
            acesso: acesso, 
            razaoSocial: '',
            cnpj: 0,
            areaAtuacao: '',
            endereco: '',
            tipoEndereco: '',
            bairro: '',
            cidade: '',
            cep: 0,
            telComercial: 0
        }
    
        async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/');

        }

    return(
        <div className="CadEmpresa">
            <h1>Dados Empresariais</h1>
            <form className="form1" onSubmit={handleSubmit}>
            <p>Os Campos do formulário que possuem asteristico são obrigatórios</p>
            <fieldset>
                <legend>Acesso</legend>
                <label>*Login: (somente letras e números)</label><br/>
                <input type="text" 
                value={username}
                onChange={e => setUserName(e.target.value)}
                ></input><br/>
                <label>*Senha:</label><br/>
                <input type="password"></input><br/>
                <label>Redigite a senha: </label><br/>
                <input type="password"></input><br/>
            </fieldset>

            <fieldset>
                <legend>Informações do Proprietário</legend>
                <div className="GridLayout1">
                    <label>*Razão social: </label><br/>
                    <input type="text"></input><br/>
                    <label>*CNPJ: (Somente números): </label><br/>
                    <input type="number"></input><br/>
                </div>

                <label>*Área de atuação: </label><br/>
                <input type="text"></input><br/>

                <label>*Endereço: </label><br/>
                <input type="text"></input><br/>
                <label>*Tipo de Endereço: </label><br/>
                <input type="text"></input><br/>

                <div className="InlineLayout1">                        
                <label>*Bairro: </label><br/>
                <input type="text"></input><br/>
                <label>*Cidade: </label><br/>
                <input type="text"></input><br/>
                </div>

                <label>*CEP: (Somente números)</label><br/>
                <input type="number"></input><br/>
            </fieldset>

            <fieldset>
                <legend>Contato</legend>

                <label>*E-mail: </label><br/>
                <input type="email"></input><br/>
                <label>*Confirme o seu e-mail: </label><br/>
                <input type="email"></input><br/>

                <label>*Telefone comercial: (somente números / com DDD) </label><br/>
                <input type="tel" placeholder="(DD)0000-0000"></input><br/>
                <label>Fax: (somente números / com DDD) </label><br/>
                <input type="tel" placeholder="(DD)0000-0000"></input><br/>
                <label>Desejo receber notícias por e-mail</label><br/>
                <input type="checkbox"/><br/>
            </fieldset>
           
                <input className="BtnEnviar" type="submit" value="Enviar"></input>
            </form>
            
        </div>
    );
}