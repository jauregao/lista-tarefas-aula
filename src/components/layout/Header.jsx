export function Header({ pendentes }) {
  return (
    <header className="page-header">
      <div className="brand-mark" aria-hidden="true">✳</div>
      <p className="date-label">Suas Tarefas Diárias</p>
      <h1>Meu dia <span>.</span></h1>
      <p className="header-caption">
        Pequenas tarefas também levam a grandes conquistas.
        <span className="pending-pill"> {pendentes} pendentes</span>
      </p>
    </header>
  )
}