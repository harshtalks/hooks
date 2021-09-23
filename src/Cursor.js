import { CursorCustom } from "./styles/Cursor.styles";
import { useContext, useEffect, useState } from "react";
import { globalContext } from "./GlobalContext";
const Cursor = () => {
  const [mousePos, setMousePos] = useState({
    x: 400,
    y: 400
  });
  const { state } = useContext(globalContext);

  const onMouseMove = (e) => {
    const { pageX: x, pageY: y } = e;
    setMousePos({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <CursorCustom
      className={`${!!state.cursorType ? "hovered" : ""}  ${state.cursorType}`}
      style={{
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`
      }}
    >
      {" "}
    </CursorCustom>
  );
};

export default Cursor;
