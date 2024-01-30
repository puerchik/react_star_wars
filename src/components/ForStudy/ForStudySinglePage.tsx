import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Post } from './ForStudyBlog';
import s from './ForStudySinglePage.module.css';

const ForStudySinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);

  return (
    <>
      <button onClick={goBack}>Go back</button>
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
