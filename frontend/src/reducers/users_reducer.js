import { RECEIVE_USERS, RECEIVE_USER, RECEIVE_USERS_FROM_SEARCH, RECEIVE_USERS_VIA_EVENT } from "../actions/user_actions";
import { formatToJson } from "../util/data_format_api";

const initialState = { all: {}, event: {}, search: {} };

export default function (state = initialState, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USERS:
            newState.all = formatToJson(action.users.data);
            return newState;
        case RECEIVE_USERS_FROM_SEARCH:
            newState.search = formatToJson(action.users.data);
            return newState;
        case RECEIVE_USERS_VIA_EVENT:
            newState.event = formatToJson(action.users.data);
            return newState;
        case RECEIVE_USER:
            newState.event[action.user._id] = action.user;
            return newState;
        default:
            return state;
    }
}