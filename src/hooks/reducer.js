export const reducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: null,
            };
        case 'FETCH_ERROR':
            return {
                loading: false,
                data: null,
                error: action.payload,
            };
        default:
        return state;
    }
};