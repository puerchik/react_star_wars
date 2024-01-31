import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import s from './ForStudyBlog.module.css';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Params = {
  post?: string;
  latest?: string;
};

const ForStudyBlog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = (form.elements.namedItem('search') as HTMLInputElement).value;
    const checked = (form.elements.namedItem('latest') as HTMLInputElement).checked;

    const params: Params = {};

    if (query) params.post = query;
    if (checked) params.latest = 'true';

    setSearchParams(params);
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="search" name="search" />
        <input type="checkbox" name="latest" />
        <input type="submit" value="search" />
      </form>
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

export default ForStudyBlog;
