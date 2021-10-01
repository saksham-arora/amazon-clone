import React, { createContext, useContext, useReducer } from "react";

//Prepares the data layer
export const StateContext = createContext();

//We need to wrap our app with the state provider to get the data wherever needed
//Reducer is used to put the information in the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//The below function is used to pull the information from the data layer
export const useStateValue = () => useContext(StateContext);
