export const SWAPI_ROOT = "https://swapi.dev/api/";
export const SWAPI_PEOPLE = "people";

export const getApiResource = async (url: RequestInfo | URL) => {
    try {
        // т.к. функция ассинхронная (async/await), используем конструкцию try/catch
        const res = await fetch(url); // делаем запрос через метод fetch, в res возвращается промис

        if (!res.ok) {
            /*
            Проверяем Ok/Failed запрса. Например "страница не найдена. 404"
            Свойство "ok" объекта Response в Fetch API представляет статус успешности ответа.
            Это свойство возвращает true, если статус ответа находится в диапазоне 200-299,
            и false в противном случае.
            */
            console.log("Could not fetch. ", res.status);
            return false; //если запрос failed возвращаем false и выходим из try
        }
        const body: Response = await res.json();

        console.log(body.results);

        return body; //если запрос ok возвращаем body и выходим из try
    } catch (e: unknown) {
        if (e instanceof Error) {
            /*
            В контексте обработки ошибок, instanceof Error проверяет, является ли объект ошибкой. 
            Это полезно, потому что в JavaScript ошибки являются экземплярами класса Error.
            Оператор instanceof в JavaScript используется для проверки, 
            является ли объект экземпляром определённого класса или конструктора. 
            Он возвращает true, если объект был создан с использованием этого конструктора,
            и false в противном случае.
            */
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
