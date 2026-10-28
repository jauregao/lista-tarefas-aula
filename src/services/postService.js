const URLBase = 'https://jsonplaceholder.typicode.com';

async function fetchCommentsByPostId(postId) {
  const searchParams = new URLSearchParams({
    postId
  });
  const URL = `${URLBase}/comments?${searchParams.toString()}`;

  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error('Erro ao buscar os comentários');
  }

  return await response.json();
}

async function fetchPostById(id) {
  const response = await fetch(`${URLBase}/posts/${id}`);

  if (!response.ok) {
    throw new Error('Erro ao buscar o post');
  }

  return await response.json();
}

async function fetchAllPosts() {
  const response = await fetch(`${URLBase}/posts`);

  if (!response.ok) {
    throw new Error('Erro ao buscar os posts');
  }

  const data = await response.json();
  return data.slice(0, 10);
}

async function createComment(comment) {
  const { title, body } = comment;

  if (!title || !body) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const novoComentario = {
    userId: 1,
    title,
    body,
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(novoComentario),
  };

  const response = await fetch(`${URLBase}/posts`, options);

  if (!response.ok) {
    throw new Error('Erro ao enviar o comentário.');
  }

  return await response.json();
}

export {
  fetchCommentsByPostId,
  fetchPostById,
  fetchAllPosts,
  createComment
}
