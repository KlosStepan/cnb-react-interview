import { ActionTypes } from "../constants/action-types";
const initialState = {
    date: "date",
    header: [],
    table: []
}
export const currenciesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_DATE:
            return { ...state, date: payload };
        case ActionTypes.SET_HEADER:
            return { ...state, header: payload };
        case ActionTypes.SET_BODY:
            return { ...state, header: payload };
        default:
            return state;
    }
}