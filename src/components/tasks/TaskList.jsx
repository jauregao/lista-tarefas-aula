import { TaskItem } from "./TaskItem";

export function TaskList({ tarefas, onAlternar, onRemover, onEditar }) {

  if(tarefas.length === 0) return <p className="empty-state">Nenhuma tarefa encontrada.</p>;

    return (
        <ul className="task-list">
            {tarefas.map((tarefa) => (
                <TaskItem 
                    key={tarefa.id} 
                    tarefa={tarefa} 
                    onAlternar={onAlternar} 
                    onRemover={onRemover} 
                    onEditar={onEditar} 
                />
            ))}
        </ul>
    )
}