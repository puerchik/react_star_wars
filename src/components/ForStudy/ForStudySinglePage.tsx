import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Post } from './ForStudyBlog';
import s from './ForStudySinglePage.module.css';

const ForStudySinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);

  return (
    <>
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
