import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Comments } from "../components/Comments";
import { NewComment } from "../components/NewComment";
import { fetchPostById } from "../services/postService";

export function Post() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const ref = searchParams.get('ref');
  const nome = searchParams.get('nome');
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {


    async function fetchPost() {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchPostById(id);
        setPost(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };


    
    fetchPost();
  }, [id]);

  function voltar(){
    navigate(-1);
  }
  
  if (loading) return <p>Carregando post...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!post) return <p>Post não encontrado.</p>;

  console.log("ID atual:", id);

  return (
    <main>
      {error && <p>Desculpe, tivemos um erro: {error}</p>}
      {!loading && !error && post && (
        <>
          <article>
            {ref && <p>Referência: {ref}</p>}
            {nome && <p>Nome: {nome}</p>}
            <h3>{post.id}</h3>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button type="button" onClick={voltar}>Voltar</button>
          </article>

          <NewComment/>
          <Comments id={post.id}/>
        </>
      )}
    </main>
  );
}