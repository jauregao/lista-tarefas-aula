import { taskFilters } from "../../constants/taskFilters";

export function TaskFilters({ filtroAtual, onMudarFiltro }) {
  return (
    <div className="filters" aria-label="Filtros de tarefas">
      {
        taskFilters.map((opcao)=> (
          <button
            key={opcao.valor}
            type="button"
            onClick={() => onMudarFiltro(opcao.valor)}
            className={filtroAtual === opcao.valor ? 'filter-button active' : 'filter-button'}
            aria-pressed={filtroAtual === opcao.valor}
          >
            {opcao.rotulo}
          </button>
        ))
      }
    </div>
  )
}