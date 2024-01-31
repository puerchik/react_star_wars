import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import s from './ForStudyBlog.module.css';
import BlogFilter from './BlogFilter';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
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

export default ForStudyBlog;
