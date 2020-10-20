import axios from "axios";

export const fetchEvents = userId => {
    return axios.get(`/api/users/${userId}/events`);
};

export const fetchEvent = eventId => {
    return axios.get(`/api/events/${eventId}`);
};

export const createEvent = event => {
    return axios.post(`/api/events/new`, event);
};

export const editEvent = event => {
    return axios.patch(`/api/events/edit/${event._id}`, event);
};

export const deleteEvent = eventId => {
    return axios.delete(`/api/events/${eventId}`);
};