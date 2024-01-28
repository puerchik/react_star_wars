import { useParams } from 'react-router-dom';
import s from './EditPost.module.css';

const EditPost = () => {
  const { id } = useParams();
  return (
    <>
      <p>Edit post {`${id}`}</p>
    </>
  );
};

export default EditPost;
