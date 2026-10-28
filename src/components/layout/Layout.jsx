import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navegacao } from "./Navegacao";

export function Layout() {
  return (
    <div>
      <Header/>
      <Navegacao/>
      <Outlet/>
      <Footer/>
    </div>
  )
}