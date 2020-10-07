import * as APIEventsUtil from "../util/event_util";

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

const receiveEvents = events => {
    return({
        type: RECEIVE_EVENTS,
        events
    });
};

const receiveEvent = event => {
    return({
        type: RECEIVE_EVENT,
        event
    });
};

const removeEvent = eventId => {
    return({
        type: REMOVE_EVENT,
        eventId
    });
};

export const fetchEvents = (userId) => (dispatch) => {
    return (APIEventsUtil.fetchEvents(userId).then(events => dispatch(receiveEvents(events))));
};

export const fetchEvent = (eventId) => (dispatch) => {
    return (APIEventsUtil.fetchEvent(eventId).then(event => dispatch(receiveEvent(event))));
};

export const createEvent = (event) => (dispatch) => {
    return (APIEventsUtil.createEvent(event).then(event => dispatch(receiveEvent(event))));
};

export const editEvent = (event) => (dispatch) => {
    return (APIEventsUtil.editEvent(event).then(event => dispatch(receiveEvent(event))));
};

export const deleteEvent = (eventId) => (dispatch) => {
    return (APIEventsUtil.deleteEvent(eventId).then(dispatch(removeEvent(eventId))));
};