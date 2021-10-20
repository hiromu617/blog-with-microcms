import {VFC} from "react"
import styled from "styled-components";
import { Colors } from "../constants/Colors";
import { Size } from "../constants/Size";
import { useAppDispatch } from "../stores";
import { useAppSelector } from "../stores";
import { toggleUiState } from "../stores/uiState";

export const UiToggleButton: VFC = () => {
  const dispatch = useAppDispatch()
  const currentUiState = useAppSelector((state) => state.uiState.state);

  return (
    <Button onClick={() => dispatch(toggleUiState())}>
      {currentUiState === "card"? "List" : "Card"}
    </Button>
  )
}

const Button = styled.button`
  line-height: 100%;
  border: none;
  background-color: ${Colors.MAIN_COLOR};
  border-radius: 5px;
  font-size: ${Size.FONT.MD};
  color: #fff;
  padding: 10px 20px;
  &:hover {
    opacity: 0.9;
  }
`;