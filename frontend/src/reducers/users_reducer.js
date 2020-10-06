import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user_actions";

const initialState = {};

export default function (state = initialState, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        default:
            return state;
    }
}