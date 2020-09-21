import styled, { css } from "styled-components"

export const Container = styled.div`
  flex-grow: 1;
  height: 100%;
  width: auto;
  margin: 0 auto;
  padding: 0 32px;
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

  ${props => props.spaceBetween && css`
    justify-content: space-between;
  `}
`
