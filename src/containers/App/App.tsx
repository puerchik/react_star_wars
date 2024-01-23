import s from "./App.module.css";
import { SWAPI_PEOPLE, SWAPI_ROOT, getApiResource } from "./../../utils/network";

getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);

const App = () => {
    return <h1 className={s.header}>Hello</h1>;
};

export default App;
