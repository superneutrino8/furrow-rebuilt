import styled, { css } from "styled-components"

export const Container = styled.div`
  flex-grow: 1;
  height: 100%;
  width: auto;
  margin: 0 auto;
  padding: 0 120px;
  position: relative;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      margin: 0;
      padding: 0;
      max-width: 100%;
    `}
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.noHeight &&
    css`
      height: 0px;
    `}
`

export const Cursor = styled.div`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 200px;
  left: 200px;
  background: ${props => props.theme.red};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, transform, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;

  &.hovered {
    width: 28px;
    height: 28px;
    background: transparent;
    border: 2px solid ${props => props.theme.red};
  }

  &.pointer {
    border: 2px solid ${props => props.theme.color};
    background: transparent !important;
  }

  &.nav-hover {
    background: ${props => props.theme.color};
  }
`
