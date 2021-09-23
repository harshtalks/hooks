import React, { createContext, useReducer } from "react";

//creating Context at first.
const initialState = {
  currentTheme: "dark"
};

export const globalContext = createContext();

const TOGGLE_THEME = "TOGGLE_THEME";

//creating reducer instead of a normal useState
const Globalreducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        currentTheme: action.theme
      };
    default:
      throw new Error(`action type is not defined: ${action.type}`);
  }
};

//let's create a provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Globalreducer, initialState);

  return (
    <globalContext.Provider value={{ state, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};

//screw me fuck me already what rhe fuck
