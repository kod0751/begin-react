import { useReducer, useCallback } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name] : [action.value],
            };
        case 'RESET':
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
        default:
            return state;
    }
}

function useInputsReducer(initialForm) {
    const [form, dispatch] = useReducer(reducer, initailForm);
    const onChange = useCallback( e => {
        dispatch({
            type: 'CHANGE',
            name,
            value,
        })
    }, []);
    const onReset = useCallback(() => {
        dispatch({
            type: 'RESET',
        })
    }, [])

    return [form, onChange, onReset];
};

export default useInputsReducer;