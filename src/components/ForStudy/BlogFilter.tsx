import { SetURLSearchParams } from 'react-router-dom';
import s from './BlogFilter.module.css';

type Props = {
  setSearchParams: SetURLSearchParams;
};

type Params = {
  post?: string;
  latest?: string;
};

const BlogFilter = ({ setSearchParams }: Props) => {
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
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="search" name="search" />
      <input type="checkbox" name="latest" />
      <input type="submit" value="search" />
    </form>
  );
};

export default BlogFilter;
