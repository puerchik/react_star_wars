import { SetURLSearchParams } from 'react-router-dom';
import s from './BlogFilter.module.css';
import { useState } from 'react';

type Props = {
  setSearchParams: SetURLSearchParams;
  postQuery: string;
  latest: boolean;
};

type Params = {
  post?: string;
  latest?: string;
};

const BlogFilter = ({ setSearchParams, postQuery, latest }: Props) => {
  const [search, setSearch] = useState<string>(postQuery);
  const [checked, setChecked] = useState<boolean>(latest);

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
      <input
        type="search"
        name="search"
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
      />
      <input
        type="checkbox"
        name="latest"
        checked={checked}
        onChange={e => setChecked(e.currentTarget.checked)}
      />
      <input type="submit" value="search" />
    </form>
  );
};

export default BlogFilter;
