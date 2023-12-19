import { Link } from "react-router-dom";

export const Card = ({ pj }) => {

    return (
        <div className="card ms-5 me-5 mt-5 p-2 text-start" style={ { width: '18rem' } }>
            <img src={ pj.image } className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ pj.name }</h5>
                <p className="card-text">
                    Apariciones por episodio: <b>{ pj.episode.length }</b><br />
                    Origen: <b>{ pj.origin.name }</b>
                </p>
                <Link to={ `/details/${ pj.id }` } className="btn btn-primary">Ver Detalles</Link>
            </div>
        </div>
    )
}