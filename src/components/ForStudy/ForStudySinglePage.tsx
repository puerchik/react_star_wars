import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Post } from './ForStudyBlog';
import s from './ForStudySinglePage.module.css';
import { useAuth } from '../../hook/useAuth';

const ForStudySinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', { replace: true });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);

  return (
    <>
      <button onClick={goBack}>Go back</button>
      {/* Bad approach */}
      <button onClick={goHome}>Go home</button>

      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>
            <p>Edit post</p>
          </Link>
        </>
      )}
    </>
  );
};

export default ForStudySinglePage;
