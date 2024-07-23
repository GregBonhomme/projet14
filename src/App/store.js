import { configureStore } from "@reduxjs/toolkit";

let state = {
    employees : {
        firstname : "",
        lastname: "",
        startDate: "",
        department: "",
        birthDate: "",
        street:"",
        city:"",
        state:"",
        zipcode:""
    }
}

const reducer = (currentState, action) => {
    switch (action.type) {
    
        default:
            break;
    }
}

export const store = configureStore({
    preloadedState: state,
    reducer,
})