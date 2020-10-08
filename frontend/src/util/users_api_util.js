import axios from "axios";

export const fetchUsersFromSearch = data => {
  return axios.get("/api/searches/search", {
    params: data,
  });
};

export const fetchUsersViaEvent = eventId => {
  return axios.get(`/api/events/${eventId}/attendees`);
};

export const fetchUser = userId => {
    return axios.get(`/api/users/${userId}`);
};

