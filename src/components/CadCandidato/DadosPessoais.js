import React from 'react';

export default function DadosPessoais(){
    return(
        <div className="DadosPessoais">
            <h1>Dados Pessoais</h1>
            <form>
            Os Campos do formulário que possuem asteristico são obrigatórios
            <label>*Login: (somente letras e números)</label>
            <input type="text" ></input>
            <label>*Senha:</label>
            <input type="password"></input>
            <label>*Redigite a senha: </label>
            <input type="password"></input>
            <label>*Nome Completo</label>
            <input type="text"/>
            <label>*RG</label>
            <input type="number"/>
            <label>*Orgão Expedidor:</label>
            <input type="text"/>
            <label>Data de expedição: (somente números)</label>
            <input type="Date"/>
            <label>UF da expedição: </label>
            <input type="text"/>
            <label>*CPF: (somente números)</label>
            <input type="number"/>
            <label>Data de nascimento: (somente números)</label>
            <input type="Date"/>
            <label>*Sexo: </label>
            <select>
                <option>Masculino</option>
                <option>Feminino</option>
            </select>
            <label>*Estado civil: </label>
            <select name="Não informado">
                <option>Solteiro</option>
                <option>Casado</option>
                <option>Divorciado</option>
            </select>
            <label>*Endereço: </label>
            <input type="text"/>
            <label>*Tipo de endereço: </label>
            <select name="Não informado">
                <option>Rural</option>
                <option>Urbano</option>
            </select>
            <label>*Bairro: </label>
            <input type="text"/>
            <label>*UF:</label>
            <select name="Não informado">
                <option>TO</option>
                <option>MA</option>
            </select>
            <label>*Cidade: </label>
            <select>
                <option>Palmas</option>
                <option>Gurupi</option>
                <option>Teresina</option>
            </select>
            <label>*CEP:</label>
            <input type="number"/>
            <label>*E-mail:</label>
            <input type="email"/>
            <label>*Confirme o seu e-mail:</label>
            <input type="email"/>
            <label>*Telefone residencial: (somente números / com DD)</label>
            <input type="tel"/>
            <label>*Telefone celular: (somente números / com DD)</label>
            <input type="tel"/>
            <label>Desejo receber notícias por e-mail:</label>
            <input type="checkbox"/>
            </form>
        </div>
    );
}