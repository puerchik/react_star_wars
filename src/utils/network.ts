export const SWAPI_ROOT = "https://swapi.dev/api/";
export const SWAPI_PEOPLE = "people";

export const getApiResource = async (url: RequestInfo | URL) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.log("Could not fetch. ", res.status);
            return false;
        }
        const body: Response = await res.json();

        console.log(body.results);

        return body;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.log("Could not fetch. " + e.message);
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
