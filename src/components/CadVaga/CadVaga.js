import React from 'react';
import './cadvaga.css';

export default function CadVaga(){
    return(
        <div className="CadVaga">
                <h1>Cadastro Para Novas Vagas</h1>
            <form>
                <fieldset>
                    <label>*Cargo:</label><br/>
                    <input type="text"/><br/>
                    <label>*Especificações do Cargo:</label><br/>
                    <textarea/><br/>
                    <label>*Remuneração:</label><br/>
                    <input type="number"/><br/>
                    <label>*Vale Transporte:</label><br/>
                    <select>
                        <option>Sim</option>
                        <option>Não</option>
                    </select><br/>
                    <label>*Vale Refeição:</label><br/>
                    <select>
                        <option>Sim</option>
                        <option>Não</option>
                    </select><br/>
                    <label>*Outros: </label><br/>
                    <textarea/><br/>
                    <label>*Turno:</label><br/>
                    <select>
                        <option>Tarde</option>
                        <option>Manhã</option>
                    </select><br/>
                    <label>*Forma de contratação:</label><br/>
                    <select>
                        <option>CLT</option>
                        <option>Terceirização</option>
                        <option>Contratação temporária</option>
                    </select><br/>
                    <label>*UF:</label><br/>
                    <select>
                        <option>TO</option>
                        <option>MA</option>
                    </select>
                </fieldset>
                <input className="btnCadVaga" type="submit" value="Cadastrar"/>
            </form>
        </div>
    );
}