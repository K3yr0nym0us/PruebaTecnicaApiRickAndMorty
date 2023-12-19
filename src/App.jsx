import { useReducer } from "react";
import { useEffect } from "react";
import { reducer } from "./hooks/reducer";
import { getFetchData } from "./hooks/getFetchData";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { DetailsPj } from "./routes/DetailsPj";
import './styles/bootstrap.min.css';
import './styles/home.css';

export const App = () => {

    const initialState = {
        loading: true,
        data: null,
        error: null,
    };

    const [ state, dispatch ] = useReducer(reducer, initialState);

    useEffect(() => {
        getFetchData(dispatch);
    }, [])

    return (
        <Routes>
            <Route path="/" element={ <Home state={ state } /> } />
            <Route path="/details/:id" element={ <DetailsPj data={ state.data } /> } />
        </Routes>
    )
}