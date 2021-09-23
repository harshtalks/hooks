import React, { createContext, useReducer, useContext } from "react";

//creating Context at first.

const globalStateContext = createContext();
const globalDispatchContext = createContext();

const TOGGLE_THEME = "TOGGLE_THEME";

//creating reducer instead of a normal useState
const reducer = (state, action) => {
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
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    /*initial state*/ {
      currentTheme: "dark"
    }
  );

  return (
    <globalDispatchContext.Provider value={dispatch}>
      <globalStateContext.Provider value={state}>
        {children}
      </globalStateContext.Provider>
    </globalDispatchContext.Provider>
  );
};

export const useGlobalStateContext = () => useContext(globalStateContext);
export const useGlobalDispatchContext = () => useContext(globalDispatchContext);
