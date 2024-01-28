import styled from 'styled-components'

import { fonts } from '../../styles/fonts'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;

  img {
    display: flex;
    height: 2.5rem;
    border-radius: 6px;
  }
`

export const HeaderNavigation = styled.nav`
  display: flex;
  gap: 0.75rem;

  div {
    background-color: ${(props) => props.theme.secondaryLight};
    color: ${(props) => props.theme.secondary};
    padding: 0.5rem;
    text-decoration: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    span {
      color: ${(props) => props.theme.secondaryDark};
    }
  }

  a {
    background-color: ${(props) => props.theme.secondaryLight};
    color: ${(props) => props.theme.secondary};
    padding: 0.5rem;
    text-decoration: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    background-color: ${(props) => props.theme.primaryLight};
    color: ${(props) => props.theme.primaryDark};

    > div {
      display: flex;
      width: 1.25rem;
      height: 1.25rem;

      justify-content: center;
      align-items: center;

      position: absolute;
      margin-right: -2.5rem;
      margin-top: -2.5rem;

      border-radius: 999px;
      background: ${(props) => props.theme.primaryDark};

      > span {
        ${fonts.textXS};
        color: ${(props) => props.theme.white};
        text-align: center;
      }
    }
  }
`
