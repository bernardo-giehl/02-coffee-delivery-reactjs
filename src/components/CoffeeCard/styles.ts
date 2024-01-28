import styled from 'styled-components'

import { fonts } from '../../styles/fonts'

export const Card = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  background-color: ${(props) => props.theme.baseCard};

  > p {
    color: ${(props) => props.theme.baseText};
    text-align: right;
  }
`

export const CardLinha = styled.hr`
  display: block;
  width: 100%;
  border: 1px solid ${(props) => props.theme.baseButton};
`

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  > img {
    display: flex;
    width: 4rem;
    height: 4rem;
    justify-content: center;
    align-items: center;
  }
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  > p {
    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const CardBuy = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    ${fonts.buttonM}
    text-transform: uppercase;
    display: flex;
    height: 2rem;
    padding: 0rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    background-color: ${(props) => props.theme.baseButton};
    color: ${(props) => props.theme.baseText};
    border: none;
    border-radius: 6px;
    cursor: pointer;

    > svg {
      color: ${(props) => props.theme.secondary};
    }
  }

  > button:hover {
    color: ${(props) => props.theme.baseSubtitle};
    background-color: ${(props) => props.theme.baseHover};

    > svg {
      color: ${(props) => props.theme.secondaryDark};
    }
  }
`

export const CardInput = styled.div`
  display: flex;
  height: 2rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;

  > button {
    background-color: transparent;
    color: ${(props) => props.theme.secondary};
    border: none;
    width: 0.875rem;
    height: 0.875rem;
    cursor: pointer;
  }

  > button:hover {
    color: ${(props) => props.theme.secondaryDark};
  }

  > input {
    width: 1.5rem;
    height: 1.5rem;
    background-color: transparent;
    border: none;
    text-align: center;
  }

  > input::-webkit-outer-spin-button,
  > input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
