import { useLocation } from "react-router-dom";

export function NotFound(){

  const location = useLocation();
  console.log("URL não encontrada:", location.pathname);
  console.log("URL não encontrada:", location.search);

  return (
    <main>
      <h2>Página não encontrada</h2>
      <p>Desculpe, a página que você está procurando não existe.</p>
    </main>
  )
}