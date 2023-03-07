import {AI_TEXT} from "../constants/cons";

const initState = '';

function txtReducer (state = initState, action) {
    const {type, payload} = action;

    switch (type) {
        case AI_TEXT: {
            state = payload;
        }
    }

    return state
}

export default txtReducer