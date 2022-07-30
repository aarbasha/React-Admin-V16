import { FullScreen, ExitFullScreen } from "../Actions/Types";

const ScreenReducer = (state = { Run: true, Exit: false }, action) => {
    switch (action.type) {
        case FullScreen:
            return { ...state, Run: state.Run }
        case ExitFullScreen:
            return { ...state, Run: state.Exit }
        default:
            return state.Run
    }
}

export default ScreenReducer