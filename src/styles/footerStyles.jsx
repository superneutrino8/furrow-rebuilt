import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const FooterNav = styled.div`
  margin-bottom: 100px;
`

export const FooterContent = styled.div`
  color: #ea281e;
  font-size: 22px;
  font-weight: 600;
  line-height: 8px;
  flex: 1;
  ${props =>
    props.wider &&
    css`
      flex: 2 !important;
    `}
`

export const FooterSocial = styled.div`
  display: flex;
  position: relative;
  a {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    padding: 8px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`
