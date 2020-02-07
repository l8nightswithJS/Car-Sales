export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const SELECT_VEHICLE = 'SELECT_VEHICLE'

export const addFeature = (item) => {
    return {
        type: ADD_FEATURE,
        payload: item
    }
}

export const removeFeature = (item) => {
    return {
        type: REMOVE_FEATURE,
        payload: item
    }
}

export const selectVehicle = (item) => {
    return {
        type: SELECT_VEHICLE,
        payload: item
    }
}
