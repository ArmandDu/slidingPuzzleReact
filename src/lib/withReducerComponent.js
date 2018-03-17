import {compose, withHandlers, withProps, withReducer} from "recompose";


export const withReducerComponent = (actions, reducerFactory, defaultState={}) => {

    const enumActions = actions.reduce((acc, action) => ({...acc, [action]: action}), {});
    const reducer = reducerFactory(enumActions);

    const reducerHoC = withReducer("store", "dispatch", reducer, defaultState );
    const handlerHoC = withHandlers({
        send: props => (type, payload) => props.dispatch({type, payload})
    });

    return compose(reducerHoC, handlerHoC, withProps({actions: enumActions}));

};

export default withReducerComponent;