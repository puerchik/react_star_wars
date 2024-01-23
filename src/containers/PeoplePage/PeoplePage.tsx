import { useEffect, useState } from "react";
import s from "./PeoplePage.module.css";
import { ResultPeopleName, getApiResource } from "../../utils/network";
import { GUIDE_ROOT_IMG, SWAPI_PEOPLE } from "../../constatnts/api";
import { getPeopleId } from "../../services/getPeopleData";

const PeoplePage = () => {
    const [people, setPeople] = useState<null | ResultPeopleName[]>(null);
    const getResource = async (url: string) => {
        const res = await getApiResource(url);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                return {
                    name,
                    url,
                };
            });
            setPeople(peopleList);
        }
    };

    useEffect(() => {
        getResource(SWAPI_PEOPLE);
    }, []);

    return (
        <>
            {people && (
                <ul>
                    {people.map(({ name, url }) => (
                        <li key={name}>
                            <img
                                src={GUIDE_ROOT_IMG + getPeopleId(url) + ".jpg"}
                                alt={name}
                            />
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default PeoplePage;
