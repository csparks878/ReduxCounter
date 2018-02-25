const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    if (action.type === "INCREMENT"){
        return {
            count: state.counter + 1
        }
    } else if (action.type === "DECREMENT"){
        return {
            count: state.counter - 1
        }
    }
}

export default reducer;