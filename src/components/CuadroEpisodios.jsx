export const CuadroEpisodios = ({ personaje, episodeData, getEpisode, setEpisodeData }) => {
    return (
        <div className="col-2 border">
            <h2>Episodios: { personaje.episode.length }</h2>
            <select className="form-select" onChange={ (event) => getEpisode(event.target.value, setEpisodeData) }>
                {
                    personaje.episode.map( (episodio, index) =>  (
                        <option key={ episodio } value={ episodio }>Episodio: { index + 1 }</option>
                    ))
                }
            </select>
            <h3 className="fs-5 mt-3">Detalles del episodio:</h3>
            <b>Nombre:</b> { episodeData?.name }<br />
            <b>Creado:</b> { episodeData?.air_date }<br />
            <b>Personajes:</b> { episodeData?.characters.length }<br />
        </div>
    )
}