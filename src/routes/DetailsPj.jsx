import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getEpisode } from "../hooks/getEpisode";
import { CuadroEpisodios } from "../components/CuadroEpisodios";
import { CuadroDetalles } from "../components/CuadroDetalles";
import { CuadroPartImportant } from "../components/CuadroPartImportant";

export const DetailsPj = ({ data }) => {

    const { id } = useParams();
    const [ episodeData, setEpisodeData ] = useState();
    const personaje = data[id - 1];

    useEffect(() => {
        getEpisode(personaje.episode[0], setEpisodeData);
    }, [])

    return (
        <div className="text-center text-white">
            <h1 className="mt-3 fw-bold">DETALLES DEL PERSONAJE</h1>
            <div className="row border m-4 p-2 rounded text-start">
                <div className="col-3">
                    <h2>Apariencia:</h2>
                    <img src={ personaje.image } />
                </div>
                <CuadroDetalles personaje={ personaje } />
                <CuadroEpisodios 
                    personaje={ personaje } 
                    episodeData={ episodeData } 
                    getEpisode={ getEpisode } 
                    setEpisodeData={ setEpisodeData } 
                />
                <CuadroPartImportant data={ data } episodeData={ episodeData } /> 
            </div>
            <button className="btn btn-primary">
                <Link to="/" className="btn btn-primary">VOLVER</Link>
            </button>
        </div>
    )
}