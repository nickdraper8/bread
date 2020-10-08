import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import eventsReducer from "./events_reducer";
import expensesReducer from './expenses_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer,
    expenses: expensesReducer
});

export default entitiesReducer;