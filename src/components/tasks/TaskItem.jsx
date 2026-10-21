import { useState } from "react";

export function TaskItem({ tarefa, onAlternar, onRemover, onEditar }) {
  const [editando, setEditando] = useState(false);
  const [textoEditado, setTextoEditado] = useState(tarefa.texto);

  function handleSubmit(e) {
    e.preventDefault();
    const textoLimpo = textoEditado.trim();
    if (textoLimpo) {
      onEditar(tarefa.id, textoLimpo);
      setEditando(false);
    }
  }

  function cancelarEdicao() {
    setTextoEditado(tarefa.texto);
    setEditando(false);
  }

  if (editando) {
    return (
      <li className="task-item editing">
        <form className="edit-form" onSubmit={handleSubmit}>
          <label 
            htmlFor={`editar-tarefa-${tarefa.id}`}
            className="sr-only"
          >
            Editar tarefa
          </label>
          <input 
            type="text" id={`editar-tarefa-${tarefa.id}`} 
            value={textoEditado} 
            onChange={(e) => setTextoEditado(e.target.value)}
            maxLength={100}
            autoFocus
          />
          <button
            type="submit"
            className="save-button"
          >
            Salvar
          </button>
          <button 
            type="button"
            onClick={cancelarEdicao}
            className="cancel-button"
          >
            Cancelar
          </button>
        </form>
      </li>
    )
  }

  return (
    <li className={tarefa.concluida ? 'task-item completed' : 'task-item'}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => onAlternar(tarefa.id)}
        />
        <span className="custom-checkbox" aria-hidden="true">✓</span>
        <span className="task-text">{tarefa.texto}</span>
      </label>
      <button
        className="edit-button"
        type="button"
        aria-label={`Editar tarefa: ${tarefa.texto}`}
        onClick={() => setEditando(true)}
      >
        Editar
      </button>
      <button
        className="remove-button"
        type="button"
        aria-label={`Remover tarefa: ${tarefa.texto}`}
        onClick={() => onRemover(tarefa.id)}
      >
        ×
      </button>
    </li>
  )
}

