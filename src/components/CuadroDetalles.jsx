export const CuadroDetalles = ({ personaje }) => {
    return (
        <div className="col-3 border">
            <h2>Detalles:</h2>
            <ul className="mt-4">
                <li><b>Nombre:</b> { personaje.name }</li>
                <li><b>Genero:</b> { personaje.gender }</li>
                <li><b>Origen:</b> { personaje.origin.name }</li>
                <li><b>Especie:</b> { personaje.species }</li>
                <li><b>Estado:</b> { personaje.status }</li>
                <li><b>Creado:</b> { personaje.created.split('T')[0] }</li>
            </ul>
        </div>
    )
}