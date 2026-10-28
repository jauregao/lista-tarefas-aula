import { Link } from "react-router-dom";

export function Navegacao() {
  return (
    <nav>
      <Link to="/" >Tarefas</Link>
      <Link to="/posts" >Posts</Link>
    </nav>
  )
}