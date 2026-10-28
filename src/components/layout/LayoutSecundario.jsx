import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function LayoutSecundario() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}