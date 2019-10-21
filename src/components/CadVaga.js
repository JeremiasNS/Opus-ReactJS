import React from 'react';

export default function CadVaga(){
    return(
        <div className="CadVaga">
                <h1>CadVaga</h1>
            <form>
                <label>*Cargo:</label>
                <input type="text"/>
                <label>*Especificações do Cargo:</label>
                <textarea/>
                <label>*Remuneração:</label>
                <input type="number"/>
                <label>*Vale Transporte:</label>
                <select>
                    <option>Sim</option>
                    <option>Não</option>
                </select>
                <label>*Vale Refeição:</label>
                <select>
                    <option>Sim</option>
                    <option>Não</option>
                </select>
                <label>*Outros: </label>
                <textarea/>
                <label>*Turno:</label>
                <select>
                    <option>Tarde</option>
                    <option>Manhã</option>
                </select>
                <label>*Forma de contratação:</label>
                <select>
                    <option>CLT</option>
                    <option>Terceirização</option>
                    <option>Contratação temporária</option>
                </select>
                <label>*UF:</label>
                <select>
                    <option>TO</option>
                    <option>MA</option>
                </select>

            </form>
        </div>
    );
}