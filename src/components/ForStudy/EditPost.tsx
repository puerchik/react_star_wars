import { useNavigate, useParams } from 'react-router-dom';
import s from './EditPost.module.css';
import { useAuth } from '../../hook/useAuth';

const EditPost = () => {
  const { id } = useParams();
  const auth = useAuth();
  const navigate = useNavigate();
  console.log(auth);

  let signOutOk: (cb: () => void) => void;
  if (auth) {
    const { signout } = auth;
    signOutOk = signout;
  }

  return (
    <>
      <p>Edit post {`${id}`}</p>
      <button
        onClick={() => {
          signOutOk(() => navigate('/', { replace: true }));
        }}
      >
        Sign out
      </button>
    </>
  );
};

export default EditPost;
