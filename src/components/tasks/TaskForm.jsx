import { useState } from "react";

export function TaskForm({ onAdicionar }) {

  const [texto, setTexto] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const textoLimpo = texto.trim();
    if (textoLimpo) {
      onAdicionar(textoLimpo);
      setTexto('');
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="nova-tarefa">
        Nova Tarefa
      </label>
      <input 
        id="nova-tarefa"
        type="text"
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
        className="task-input" 
        placeholder="Digite a nova tarefa..." 
        maxLength={100}
      />
      <button type="submit" className="add-button">Adicionar <span aria-hidden="true">+</span></button>
    </form>
  )
}