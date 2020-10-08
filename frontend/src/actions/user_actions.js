import * as APIUsersUtil from "../util/users_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USERS_FROM_SEARCH = "RECEIVE_USERS_FROM_SEARCH";
export const RECEIVE_USERS_VIA_EVENT = "RECEIVE_USERS_VIA_EVENT";
export const RECEIVE_USER = "RECEIVE_USERS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const receiveUsers = users => {
    return({
        type: RECEIVE_USERS,
        users
    });
};

export const receiveUsersFromSearch = users => {
    return({
        type: RECEIVE_USERS_FROM_SEARCH,
        users
    });
};

export const receiveUsersViaEvent = users => {
    return({
        type: RECEIVE_USERS_VIA_EVENT,
        users
    });
};

export const receiveUser = user => {
    return({
        type: RECEIVE_USER,
        user
    });
};

export const clearSearch = () => {
    return({
        type: CLEAR_SEARCH
    });
};

export const fetchUsersFromSearch = (data) => (dispatch) => {
    return (APIUsersUtil.fetchUsersFromSearch(data).then(users => dispatch(receiveUsersFromSearch(users))));
};

export const fetchUsersViaEvent = (eventId) => (dispatch) => {
    return (APIUsersUtil.fetchUsersViaEvent(eventId).then(users => dispatch(receiveUsersViaEvent(users))));
}

export const fetchUser = (userId) => (dispatch) => {
    return (APIUsersUtil.fetchUser(userId).then(user => dispatch(receiveUser(user))));
};