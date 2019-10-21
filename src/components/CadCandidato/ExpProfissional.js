import React from 'react';

export default function ExpProficional(){
    return(
        <div className="ExpProficional">
            <h1>Experiência Profissional</h1>
            <form>
            <p> Os Campos do formulário que possuem asteristico são obrigatórios</p>
            <label>*Empresa: </label>
            <input type="text"/>
            <label>*Cargo:</label>
            <input type="text"/>
            <label>*Tarefas executadas:</label>
            <textarea/>
            <label>*Forma de contratação:</label>
            <select>
                    <option>CLT</option>
                    <option>Terceirização</option>
                    <option>Contratação temporária</option>
            </select>
            <label>*Data de início: (somente números)</label>
            <input type="Date"/>
            <label>*Data de conclusão: (somente números)</label>
            <input type="Date"/>
            </form>
        </div>
    );
}