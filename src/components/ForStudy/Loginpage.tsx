import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let signInOk: (newUser: string, cb: () => void) => void;
  const auth = useAuth();
  if (auth) {
    const { signin } = auth;
    signInOk = signin;
  }

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const user = (form.elements.namedItem('username') as HTMLInputElement)?.value;

    signInOk(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export { LoginPage };
