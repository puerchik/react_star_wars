import s from './PersonInfo.module.css';
import { PersonInfoType } from '../../../containers/PersonPage/PersonPage';

const PersonInfo = ({ personInfo }: { personInfo: PersonInfoType[] }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list__container}>
        {personInfo.map(
          ({ title, data }) =>
            data && (
              <li className={s.list__item} key={title}>
                <span className={s.item__title}>
                  {title}: {data}
                </span>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

export default PersonInfo;
