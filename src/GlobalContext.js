import React, { createContext, useReducer } from "react";

//creating Context at first.

export const globalStateContext = createContext();

const TOGGLE_THEME = "TOGGLE_THEME";

//creating reducer instead of a normal useState
const Globalreducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        currentTheme: action.theme
      };
    case "TOGGLE_CURSOR":
      return {
        ...state,
        cursorType: action.cursorType
      };
    default:
      throw new Error(`action type is not defined: ${action.type}`);
  }
};

const initialState = {
  currentTheme: "dark"
};

//let's create a provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Globalreducer, initialState);

  return (
    <globalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </globalStateContext.Provider>
  );
};

//screw me fuck me already what rhe fuck
