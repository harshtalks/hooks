import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import { globalContext } from "./GlobalContext";
import { useContext, useEffect } from "react";
import Cursor from "./Cursor";
export default function App() {
  //main stuff here
  //themes
  const DarkTheme = {
    background: "#000000",
    text: "#ffffff",
    red: "red"
  };

  const LightTheme = {
    //eslint ignore no-unused-vars
    background: "#ffffff",
    text: "#000000",
    red: "red"
  };

  const { state, dispatch } = useContext(globalContext);
  const currentTheme = state.currentTheme;

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({
        type: "TOGGLE_THEME",
        theme: "light"
      });
    } else
      dispatch({
        type: "TOGGLE_THEME",
        theme: "dark"
      });
  };

  const toggleCursor = (cursorType) => {
    cursorType =
      (state.cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({
      type: "TOGGLE_CURSOR",
      cursorType: cursorType
    });
  };

  useEffect(() => {
    window.localStorage.setItem("theme", state.currentTheme);
  }, [state.currentTheme]);
  //using context to get the refernce for theme changing

  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? DarkTheme : LightTheme}>
        <Cursor />
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} toggleCursor={toggleCursor} />
        <h1>HI BESTIES</h1>
      </ThemeProvider>
    </>
  );
}
