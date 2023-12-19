export const getFetchData = async (dispatch) => {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character');

        if(!res.ok) {
            throw new Error(`HTTP error! Status: ${ res.status }`);
        }
        
        const { results } = await res.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: results });
    } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
}