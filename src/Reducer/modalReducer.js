export const INITIAL_STATE = {
    modalActive: null
}

export const ModalReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                modalActive: 'add'
            };
        case 'edite':
            return {
                ...state,
                modalActive: 'edite'
            };
        case 'delete':
            return {
                ...state,
                modalActive: 'delete'
            };
        case 'close':
            return {
                ...state,
                modalActive: null
            };

        default: return state;
    };
}