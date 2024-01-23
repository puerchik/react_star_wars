import axios, { AxiosError } from "axios";

export const SWAPI_PEOPLE = "people";

const instance = axios.create({
    baseURL: "https://swapi.dev/api/",
});

export const getApiResource = async (endpoint: string) => {
    try {
        const res = await instance.get<Response>(endpoint);
        console.log(res);

        if (res.status !== 200) {
            console.log("Could not fetch. ", res.status);
            return false;
        }
        const body: Response = res.data;
        console.log(body);
    } catch (e: unknown) {
        if (e instanceof AxiosError) {
            console.log("Could not fetch. ", e.response?.status);
            return false;
        }
    }
};

// types

type Response = {
    count: number;
    next: null | string;
    previous: null | string;
    results: any[];
};
