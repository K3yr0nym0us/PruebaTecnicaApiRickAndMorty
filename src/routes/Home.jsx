import { Card } from "../components/Card";

export const Home = ({ state }) => {
    return (
        <div className="col row text-center m-0">
            <h1 className="fs-1 fw-bold mt-5 text-white">Rick and Morty</h1>
            <h2 className="fs-5 fw-bold text-white">Api Personajes</h2>
            {
                state.loading ? 
                <p>Cargando...</p>
                : state.error ? 
                <p>Error: { state.error }</p>
                : state.data && 
                state.data?.map( personaje => (
                    <Card key={ personaje.id } pj={ personaje } />
                ))
            }
        </div>
    )
}