import {VFC} from "react"
import styled from "styled-components";
import { Colors } from "../constants/Colors";
import { Size } from "../constants/Size";
import { useAppDispatch } from "../stores";
import { toggleUiState } from "../stores/uiState";

export const UiToggleButton: VFC = () => {
  const dispatch = useAppDispatch()

  return (
    <button onClick={() => dispatch(toggleUiState())}>toggle</button>
  )
}