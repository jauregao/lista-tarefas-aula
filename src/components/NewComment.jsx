import { useState } from "react";
import { createComment } from "../services/postService";

export function NewComment() {
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try{
      const response = await createComment(formData);
      console.log('Comentário enviado com sucesso:', response);
      setFormData({
        title: '',
        body: ''
      });
    } catch (error) {
      console.error('Erro ao enviar o comentário:', error);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Titulo</label>
      <input type="text" name="title" id="title" 
      value={formData.title} 
      onChange={handleInputChange} />

      <label htmlFor="body">Corpo</label>
      <input type="textarea" name="body" id="body" value={formData.body} onChange={handleInputChange} />

      <button type="submit">Enviar</button>
    </form>
  )
}