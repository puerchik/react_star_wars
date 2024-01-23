import { GUIDE_ROOT_IMG } from "../../../constatnts/api";
import { getPeopleId } from "../../../services/getPeopleData";
import { ResultPeopleName } from "../../../utils/network";
import s from "./PeopleList.module.css";

type Props = {
    people: ResultPeopleName[];
};

const PeopleList = ({ people }: Props) => {
    return (
        <ul>
            {people.map(({ name, url }) => (
                <li key={name}>
                    <img src={GUIDE_ROOT_IMG + getPeopleId(url) + ".jpg"} alt={name} />
                    <p>{name}</p>
                </li>
            ))}
        </ul>
    );
};

export default PeopleList;
