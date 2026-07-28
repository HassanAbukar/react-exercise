
import { useReducer } from 'react';

const initialState = {
    counterA: 0,
    counterB: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT_A':
            return { ...state, counterA: state.counterA + 1 };
        case 'DECREMENT_A':
            return { ...state, counterA: state.counterA - 1 };
        case 'INCREMENT_B':
            return { ...state, counterB: state.counterB + 1 };
        case 'DECREMENT_B':
            return { ...state, counterB: state.counterB - 1 };
        case 'RESET_ALL':
            return initialState;
        default:
            return state;
    }
}

const DoubleCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Double Counter</h2>

            {/* Counter A */}
            <div>
                <h3>Counter A: {state.counterA}</h3>
                <button onClick={() => dispatch({ type: 'INCREMENT_A' })}>+ Increment A</button>
                <button onClick={() => dispatch({ type: 'DECREMENT_A' })}>- Decrement A</button>
            </div>

            <hr />

            {/* Counter B */}
            <div>
                <h3>Counter B: {state.counterB}</h3>
                <button onClick={() => dispatch({ type: 'INCREMENT_B' })}>+ Increment B</button>
                <button onClick={() => dispatch({ type: 'DECREMENT_B' })}>- Decrement B</button>
            </div>

            <hr />

            {/* Reset All */}
            <button onClick={() => dispatch({ type: 'RESET_ALL' })}>
                Reset All
            </button>
        </div>
    );
}

export default DoubleCounter;