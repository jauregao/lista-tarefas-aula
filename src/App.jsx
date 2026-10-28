import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tasks } from "./pages/Tasks";
import { Posts } from "./pages/Posts";
import { Post } from "./pages/Post";
import { Layout } from "./components/layout/Layout";
import { LayoutSecundario } from "./components/layout/LayoutSecundario";
import { NotFound } from "./components/NotFound";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route 
            path="/posts" 
            element={<Posts />}
          />
          <Route 
            path="/post/:id" 
            element={<Post />}
          />

          <Route 
            path="*"
            element={<NotFound />}
          />

        </Route>
        <Route element={<LayoutSecundario />}>
          <Route 
            path="/" 
            element={<Tasks />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
