import * as APIUsersUtil from "../util/users_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USERS";

export const receiveUsers = users => {
    return({
        type: RECEIVE_USERS,
        users
    });
};

export const receiveUser = user => {
    return({
        type: RECEIVE_USER,
        user
    });
};

export const fetchUsers = (data) => (dispatch) => {
    return (APIUsersUtil.fetchUsers(data).then(users => dispatch(receiveUsers(users))));
};

export const fetchUser = (userId) => (dispatch) => {
    return (APIUsersUtil.fetchUser(userId).then(user => dispatch(receiveUser(user))));
};