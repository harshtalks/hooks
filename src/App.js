import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./Header";
import { globalContext } from "./GlobalContext";
import { useContext } from "react";
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
    console.log(state.currentTheme);
  };
  //using context to get the refernce for theme changing

  return (
    <>
      <GlobalStyles theme={currentTheme === "dark" ? DarkTheme : LightTheme} />
      <Header toggleTheme={toggleTheme} />
      <h1>HI BESTIES</h1>
    </>
  );
}
