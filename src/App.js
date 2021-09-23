import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./Header";
import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from "./GlobalContext";
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
    background: "#000000",
    text: "#ffffff",
    red: "red"
  };

  //using context to get the refernce for theme changing
  const currentTheme = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

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

  return (
    <>
      <GlobalStyles theme={currentTheme === "dark" ? DarkTheme : LightTheme} />
      <Header toggleTheme={toggleTheme} />
      <h1>Hello Bestie</h1>
      <h2>I'm using useContext with useReducer. Gave me Hard time but fun</h2>
    </>
  );
}
