import axios from "axios";

export const fetchUsers = data => {
    return axios.get("/api/users", data);
};

export const fetchUser = userId => {
    return axios.get(`/api/users/${userId}`);
};

