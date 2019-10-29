import React from 'react';
import './maincadcandidato.css';

export default function DadosPessoais(){
    return(
        <div className="DadosPessoais">
            <h1>Cadastro de Candidato</h1>
            <form>
            <fieldset>
                <legend>Dados Pessoais</legend>
                Os Campos do formulário que possuem asteristico são obrigatórios
                <br/><label>*Login: (somente letras e números)</label>
                <input type="text" ></input>
                <br/><label>*Senha:</label><br/>
                <input type="password"></input><br/>
                <label>*Redigite a senha: </label><br/>
                <input type="password"></input><br/>
                <label>*Nome Completo</label><br/>
                <input type="text"/><br/>
                <label>*RG</label><br/>
                <input type="number"/><br/>

                <div className="gridCadPessoa1">
                <label>*Orgão Expedidor:</label>
                <label>UF da expedição: </label>
                <input type="text"/>
                <select>
                    <option>AC</option>
                    <option>AL</option>
                    <option>AM</option>
                    <option>AP</option>
                    <option>BA</option>
                    <option>CE</option>
                    <option>DF</option>
                    <option>ES</option>
                    <option>GO</option>
                    <option>MA</option>
                    <option>MG</option>
                    <option>MS</option>
                    <option>MT</option>
                    <option>PA</option>
                    <option>PB</option>
                    <option>PE</option>
                    <option>PI</option>
                    <option>PR</option>
                    <option>RJ</option>
                    <option>RN</option>
                    <option>RO</option>
                    <option>RR</option>
                    <option>RS</option>
                    <option>SC</option>
                    <option>SE</option>
                    <option>SP</option>
                    <option>TO</option>
                </select><br/>
                </div>

                <label>Data de expedição: (somente números)</label><br/>
                <input type="Date"/><br/>            
                <label>*CPF: (somente números)</label><br/>
                <input type="number"/><br/>
                <label>Data de nascimento: (somente números)</label><br/>
                <input type="Date"/><br/>
                <label>*Sexo: </label><br/>
                <select><br/>
                    <option>Masculino</option>
                    <option>Feminino</option>
                </select><br/>
                <label>*Estado civil: </label><br/>
                <select name="Não informado">
                    <option>Solteiro</option>
                    <option>Casado</option>
                    <option>Divorciado</option>
                </select><br/>
                <label>*Endereço: </label><br/>
                <input type="text"/><br/>
                <label>*Tipo de endereço: </label><br/>
                <select name="Não informado">
                    <option>Rural</option>
                    <option>Urbano</option>
                </select><br/>
                <label>*Bairro: </label><br/>
                <input type="text"/><br/>
                
                <div className="gridCadPessoa1">
                    <label>*UF:</label>
                    <label>*Cidade: </label>
                    <select>
                        <option>TO</option>
                        <option>MA</option>
                    </select>
                    <select>
                        <option>Palmas</option>
                        <option>Gurupi</option>
                        <option>Teresina</option>
                    </select>
                </div>
                
                <label>*CEP:</label><br/>
                <input type="number"/><br/>
                <label>*E-mail:</label><br/>
                <input type="email"/><br/>
                <label>*Confirme o seu e-mail:</label><br/>
                <input type="email"/><br/>
                <label>*Telefone residencial: (somente números / com DD)</label><br/>
                <input type="tel"/><br/>
                <label>*Telefone celular: (somente números / com DD)</label><br/>
                <input type="tel"/><br/>
                <label>Desejo receber notícias por e-mail:</label><br/>
                <input type="checkbox"/>
            </fieldset>
            </form>
        </div>
    );
}