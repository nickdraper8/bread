import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
import { formatToJson } from "../util/data_format_api";

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_EVENTS:
            return formatToJson(action.events.data);
        case RECEIVE_EVENT:
            newState[action.event.data._id] = action.event.data;
            return newState;
        case REMOVE_EVENT:
            delete newState[action.eventId];
            return newState;
        default:
            return state;
    }
};

export default eventsReducer;