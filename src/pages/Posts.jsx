import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllPosts } from '../services/postService';

export function Posts() {
    const navigate = useNavigate();
  // Estados para armazenar os dados, carregamento e erros
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    // Função assíncrona para buscar os dados
    const fetchPosts = async () => {
      try {
        const posts = await fetchAllPosts();
        setPosts(posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []); 
  
  
  if (loading) return <p>Carregando posts...</p>;
  if (error) return <p>Erro: {error}</p>;
  
  console.log('Posts renderizados:', posts);
  return (
    <main>
      <h2>Lista de Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: '20px', cursor: 'pointer' }} onClick={() => navigate(`/post/${post.id}?ref=promo`)}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
