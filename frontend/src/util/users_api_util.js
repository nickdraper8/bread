import axios from "axios";

export const fetchUsersFromSearch = data => {
  // return axios.get("/api/searches/test");
  return axios.get("/api/searches/search", {
    params: data,
  });
};

export const fetchUser = userId => {
    return axios.get(`/api/users/${userId}`);
};

