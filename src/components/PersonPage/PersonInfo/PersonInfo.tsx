import s from './PersonInfo.module.css';
import { PersonInfoType } from '../../../containers/PersonPage/PersonPage';

const PersonInfo = ({ personInfo }: { personInfo: PersonInfoType[] }) => {
  return (
    <ul>
      {personInfo.map(
        ({ title, data }) =>
          data && (
            <li key={title}>
              <span>
                {title}: {data}
              </span>
            </li>
          ),
      )}
    </ul>
  );
};

export default PersonInfo;
