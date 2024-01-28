import styled from 'styled-components'

import { fonts } from '../../styles/fonts'

export const Card = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.baseCard};
  padding: 0rem 1.25rem 1rem 1.25rem;
  gap: 1rem;

  > img {
    margin-top: -1.25rem;
    display: flex;
    height: 8rem;
  }

  > p {
    ${fonts.titleS};
    color: ${(props) => props.theme.baseSubtitle};
  }

  > span {
    color: ${(props) => props.theme.baseLabel};
  }
`

export const CardTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

export const CardTag = styled.div`
  ${fonts.tag};
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primaryLight};
  color: ${(props) => props.theme.primaryDark};
  border-radius: 999px;
  padding: 0.25rem 0.5rem;
`

export const CardBuy = styled.div`
  display: flex;
  width: 13rem;
  justify-content: space-between;
  align-items: center;

  > p {
    ${fonts.textM};
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme.baseLabel};

    > span {
      ${fonts.titleM};
      color: ${(props) => props.theme.baseSubtitle};
    }
  }

  > button {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    background-color: ${(props) => props.theme.secondaryDark};
    color: ${(props) => props.theme.baseButton};
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  > button:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`

export const CardInput = styled.div`
  height: 2.375rem;
  padding: 0.5rem;
  gap: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  gap: 0.5rem;

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
