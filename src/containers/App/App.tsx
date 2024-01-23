import s from "./App.module.css";
import { SWAPI_PEOPLE, getApiResource } from "./../../utils/network";

getApiResource(SWAPI_PEOPLE);

const App = () => {
    return <h1 className={s.header}>Hello</h1>;
};

export default App;
