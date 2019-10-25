import React from 'react';
import './cadempresa.css';

function CadEmpresa (){
    return(
        <div className="CadEmpresa">
            <h1>Dados Empresariais</h1>
            <form>
            Os Campos do formulário que possuem asteristico são obrigatórios
            <label>*Login: (somente letras e números)</label>
            <br/><input type="text" ></input>
            <label>*Senha:</label>
            <input type="password"></input>
            <label>*Redigite a senha: </label>
            <input type="password"></input>

            <div className="GridLayout1">
            <label>*Razão social: </label>
            <input type="text"></input>
            <label>*CNPJ: (Somente números): </label>
            <input ClassName="cpf" type="number"></input>
            </div>

            <label>*Área de atuação: </label>
            <input type="text"></input>
            
            <label>*Endereço: </label>
            <input type="text"></input>
            <label>*Tipo de Endereço: </label>
            <input type="text"></input>

            <div className="InlineLayout1">                        
            <label>*Bairro: </label>
            <input type="text"></input>
            <label>*Cidade: </label>
            <input type="text"></input>
            </div>

            <label>*CEP: (Somente números)</label>
            <input type="number"></input>
            
            <label>*E-mail: </label>
            <input type="email"></input>
            <label>*Confirme o seu e-mail: </label>
            <input type="email"></input>
            
            <label>*Telefone comercial: (somente números / com DDD) </label>
            <input type="tel" placeholder="(DD)0000-0000"></input>
            <label>*Fax: (somente números / com DDD) </label>
            <input type="tel" placeholder="(DD)0000-0000"></input>
            <label>Desejo receber notícias por e-mail</label>
            <input type="checkbox"/>
           
            </form>
            <input ClassName="BtnEnviar" type="submit" value="Enviar"/>
            
        </div>
    );
}

export default CadEmpresa;