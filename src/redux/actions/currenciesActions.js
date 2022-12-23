import { ActionTypes } from "../constants/action-types";

export const setDate = (date) => {
    return {
        type: ActionTypes.SET_DATE,
        payload: date
    }
}
export const setHeader = (header) => {
    return {
        type: ActionTypes.SET_HEADER,
        payload: header
    }
}
export const setBody = (body) => {
    return {
        type: ActionTypes.SET_BODY,
        payload: body
    }
}