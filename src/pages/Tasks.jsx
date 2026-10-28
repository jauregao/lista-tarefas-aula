import { useState } from 'react';
import '../styles/Tasks.css'
import initialTasks from '../data/initialTasks';
import { TaskList } from '../components/tasks/TaskList';
import { TaskForm } from '../components/tasks/TaskForm';
import { TaskFilters } from '../components/tasks/TaskFilters';

export function Tasks() {
  const [tarefas, setTarefas] = useState(initialTasks);
  const [filtro, setFiltro] = useState('todas');

  function adicionarTarefa(texto) {
    const novaTarefa = {
      id: Date.now().toString(),
      texto,
      concluida: false
    };

    setTarefas([...tarefas, novaTarefa]);
  }

  function alternarTarefa(id) {
    const listaModificada = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setTarefas(listaModificada);
  }

  function editarTarefa(id, texto) {
    const listaModificada = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, texto };
      }
      return tarefa;
    });
    setTarefas(listaModificada);
  }

  function removerTarefa(id) {
    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(tarefasFiltradas);
  }

  const tarefasVisiveis = tarefas.filter(tarefa => {
    if (filtro === 'pendentes') {
      return !tarefa.concluida;
    } else if (filtro === 'concluidas') {
      return tarefa.concluida;
    }
    return true;
  });

  return (
    <main className="page-shell">
      <TaskForm onAdicionar={adicionarTarefa}/>
      <TaskFilters 
        filtroAtual={filtro} 
        onMudarFiltro={setFiltro} 
      />
      <TaskList 
        tarefas={tarefasVisiveis} 
        onAlternar={alternarTarefa} 
        onRemover={removerTarefa} 
        onEditar={editarTarefa}
      />
    </main>
  )
}
