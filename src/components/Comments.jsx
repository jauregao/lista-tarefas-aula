import { useEffect, useState } from "react";
import { fetchCommentsByPostId } from "../services/postService";

export function Comments({ id }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchComments() {
      setLoading(true);
      setError(null);

      try {
        const comments = await fetchCommentsByPostId(id);
        setComments(comments);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, [id]);


  return (
    <div>
      <h3>Comentários</h3>
      {loading && <p>Carregando comentários...</p>}
      {error && <p>Erro: {error}</p>}

      {
        comments.length > 0 && !loading && !error ? (
          <ul>
            {comments.map(comment => (
              <li key={comment.id}>
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          !loading && !error && <p>Não há comentários para este post.</p>
        )
      }
    </div>
  )
}