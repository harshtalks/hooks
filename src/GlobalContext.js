import React, { createContext, useReducer } from "react";

//creating Context at first.
const initialState = {
  currentTheme:
    window.localStorage.getItem("theme") === null
      ? "dark"
      : window.localStorage.getItem("theme")
};

export const globalContext = createContext();

const TOGGLE_THEME = "TOGGLE_THEME";
const TOGGLE_CURSOR = "TOGGLEW_CURSOR";

//creating reducer instead of a normal useState
const Globalreducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        currentTheme: action.theme
      };
    case TOGGLE_CURSOR:
      return {
        ...state,
        cursorType: action.cursorType
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
