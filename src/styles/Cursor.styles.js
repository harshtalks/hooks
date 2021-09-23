import styled from "styled-components";

export const CursorCustom = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme.red};
  border-radius: 50%;
  top: 0;
  left: 0;

  &.pointer {
    border: 4px solid ${(props) => props.theme.text} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${(props) => props.theme.red};
  }
`;
