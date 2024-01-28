import { useParams } from 'react-router-dom';
import s from './ForStudySinglePage.module.css';
import { useEffect, useState } from 'react';
import { Post } from './ForStudyBlog';

const ForStudySinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);
  console.log(id);

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </>
  );
};

export default ForStudySinglePage;
