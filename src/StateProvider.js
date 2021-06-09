//setup data layer
// we need this to track the basket

import { createContext,useContext,useReducer } from "react";
//This is the data layer.
export const StateContext= createContext();

//Bulid a provider
export const StateProvider=({reducer, initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//this is how we use it inside of a component
export const useStateValue=()=>useContext(StateContext);
//createContext() will have provider,consumers 