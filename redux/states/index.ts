import attemptConnector from "./attempt";

export {
    addSuccess,
    addFailed,
    setSuccess,
    setFailed,
    reset,
} from "./attempt";

export const reducer = {
    attemptCounter: attemptConnector,
}

export default reducer;