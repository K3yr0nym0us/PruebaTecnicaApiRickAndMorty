export const CuadroPartImportant = ({ data, episodeData }) => {
    return (
        <div className="col border">
            <h2>Participaciones importantes:</h2>
            {
                episodeData?.characters.map( pj => {
                    const id = parseInt(pj.split('/').slice(-1)[0]);
                    const pejota = data.find( pejota => pejota.id === id)

                    return (
                        <img className="m-1" src={ pejota?.image } width={ 100 }/>
                    )
                })
            }
        </div>
    )
}