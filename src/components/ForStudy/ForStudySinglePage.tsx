import {
  Await,
  Link,
  Params,
  defer,
  useAsyncValue,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import { Post } from './ForStudyBlog';
import { Suspense } from 'react';
import s from './ForStudySinglePage.module.css';

const ForStudySinglePage = () => {
  const { post } = useLoaderData() as { post: Post | null };
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', { replace: true });

  const Post = () => {
    const post = useAsyncValue() as Post | null;
    return (
      <>
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

  return (
    <>
      <button onClick={goBack}>Go back</button>
      {/* Bad approach */}
      <button onClick={goHome}>Go home</button>
      <Suspense fallback={<h2>Post is loading...</h2>}>
        <Await resolve={post}>
          <Post />
        </Await>
      </Suspense>
    </>
  );
};

async function getPost(id: string | undefined) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return res.json();
}

export const postLoader = async ({ params }: { params: Params }) => {
  const id = params.id;

  return defer({
    post: getPost(id),
  });
};

export default ForStudySinglePage;
