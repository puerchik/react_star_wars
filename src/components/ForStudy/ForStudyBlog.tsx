import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import BlogFilter from './BlogFilter';
import s from './ForStudyBlog.module.css';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ForStudyBlog = () => {
  const posts = useLoaderData() as Post[];
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 0;

  return (
    <>
      <BlogFilter postQuery={postQuery} latest={!!latest} setSearchParams={setSearchParams} />
      <h1>Our news</h1>
      <ol>
        {posts
          .filter(f => f.title.includes(postQuery) && f.id > startsFrom)
          .map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          ))}
      </ol>
    </>
  );
};

export const postsLoader = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  return res.json();
};

export default ForStudyBlog;
