import { HeaderContent, Logo } from "./styles/Header.styles";
const Header = ({ toggleTheme, toggleCursor }) => {
  return (
    <HeaderContent>
      <Logo
        onMouseEnter={() => toggleCursor("hovered")}
        onMouseLeave={toggleCursor}
      >
        <a href="https://google.com">HAR</a>
        <span onClick={toggleTheme}></span>
        <a href="https://google.com">SHH</a>
      </Logo>
      <button>
        <span></span>
        <span></span>
      </button>
    </HeaderContent>
  );
};

export default Header;
