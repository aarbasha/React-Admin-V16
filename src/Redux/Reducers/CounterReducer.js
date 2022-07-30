import { Incremant, Decremant } from '../Actions/Types';
const CounterReducer = (state = { count: 0, users: "", data: "" }, action) => {

    switch (action.type) {
        case Incremant:
            return { ...state, count: state.count + 1 }

        case Decremant:
            return { ...state, count: state.count - 1 }

        default: return state

    }
}

export default CounterReducer