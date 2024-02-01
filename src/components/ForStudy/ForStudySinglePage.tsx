import { Link, Params, useLoaderData, useNavigate } from 'react-router-dom';
import { Post } from './ForStudyBlog';
import s from './ForStudySinglePage.module.css';

const ForStudySinglePage = () => {
  const post = useLoaderData() as Post | null;
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', { replace: true });

  return (
    <>
      <button onClick={goBack}>Go back</button>
      {/* Bad approach */}
      <button onClick={goHome}>Go home</button>

      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}/edit`}>
            <p>Edit post</p>
          </Link>
        </>
      )}
    </>
  );
};

export const postLoader = async ({ params }: { params: Params }) => {
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return res.json();
};

export default ForStudySinglePage;
