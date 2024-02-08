import { useParams } from 'react-router-dom';
import { GUIDE_ROOT_IMG } from '../../../constatnts/api';
import s from './PersonPhoto.module.css';

const PersonPhoto = ({ personName }: { personName: string | null }) => {
  const { id } = useParams();
  return (
    <div className={s.container}>
      <img className={s.photo} src={GUIDE_ROOT_IMG + id + '.jpg'} alt={personName || 'person'} />
    </div>
  );
};

export default PersonPhoto;
