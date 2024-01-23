import { useEffect } from "react";
import s from "./PeoplePage.module.css";
import { getApiResource } from "../../utils/network";
import { SWAPI_PEOPLE } from "../../constatnts/api";

const PeoplePage = () => {
    const getResource = async (url: string) => {
        const res = await getApiResource(url);
        let peopleList;
        if (res) {
            peopleList = res.results.map(({ name, url }) => {
                return {
                    name,
                    url,
                };
            });
        }

        console.log(peopleList);
    };

    useEffect(() => {
        getResource(SWAPI_PEOPLE);
    }, []);

    return (
        <>
            <div>Hello world!</div>
        </>
    );
};

export default PeoplePage;
