import { ADD_FEATURE, REMOVE_FEATURE, SELECT_VEHICLE } from "../actions";

// initial state set as object
const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};
//reducer takes in state = to above inititial state, and action
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                //uses action for both adding and calculating total price
                additionalPrice: (state.additionalPrice += action.payload.price),
                car: {
                    ...state.car,
                   
                    features: [ ...state.car.features, action.payload]
                }
            };
        case REMOVE_FEATURE:
            return {
                ...state,
                //uses action for both removing and decreasing total price
                additionalPrice: (state.additionalPrice -= action.payload.price),
                car: {
                    ...state.car,
                    features: state.car.features.filter(i => i.id !== action.payload.id)
                }
            };
        case SELECT_VEHICLE:
            return {
              ...state,
               car: action.payload
            }
              
        default:
            return state;            
    }
}