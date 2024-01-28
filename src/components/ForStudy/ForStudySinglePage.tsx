import { useParams } from 'react-router-dom';
import s from './ForStudySinglePage.module.css';

const ForStudySinglePage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <p>{id}</p>
    </>
  );
};

export default ForStudySinglePage;
