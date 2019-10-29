import React from 'react';
import './maincadcandidato.css';
export default function ExpProficional(){
    return(
        <div className="ExpProficional">
            <form>
            <fieldset>
                    <legend>Experiência Profissional</legend>
                    <p> Os Campos do formulário que possuem asteristico são obrigatórios</p>
                    <label>*Empresa: </label><br/>
                    <input type="text"/><br/>
                    <label>*Cargo:</label><br/>
                    <input type="text"/><br/>
                    <label>*Tarefas executadas:</label><br/>
                    <textarea cols="30" rows="3"/><br/>
                    <label>*Forma de contratação:</label><br/>
                    <select>
                            <option>CLT</option>
                            <option>Terceirização</option>
                            <option>Contratação temporária</option>
                    </select><br/>
                    <label>*Data de início: (somente números)</label><br/>
                    <input type="Date"/><br/>
                    <label>*Data de conclusão: (somente números)</label><br/>
                    <input type="Date"/>
                </fieldset>
                <input className="BtnEnviarCadCandidato" type="submit" value="Enviar"></input>
            </form>
        </div>
    );
}