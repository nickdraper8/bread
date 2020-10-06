import axios from "axios";

export const fetchUsers = data => {
  debugger
  // return axios.get("/api/searches/test");
  return axios.get("/api/searches/search", {
    params: data,
  });
};

export const fetchUser = userId => {
    return axios.get(`/api/users/${userId}`);
};

