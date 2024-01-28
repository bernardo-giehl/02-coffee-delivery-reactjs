import styled from 'styled-components'

import { fonts } from '../../styles/fonts'

const baseInputStyle = styled.div`
  ${fonts.textS};
  color: ${(props) => props.theme.baseText};

  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.baseButton};
  background: ${(props) => props.theme.baseInput};

  input,
  select {
    width: 100%;
    padding: 0.75rem;
    border-radius: 6px;
    border: none;
    color: ${(props) => props.theme.baseText};
    background: transparent;
  }

  input:placeholder-shown {
    color: ${(props) => props.theme.baseLabel};
  }

  input:focus,
  select:focus {
    outline: none;
  }

  span {
    padding: 0.75rem 0.75rem 0.75rem 0;
    color: ${(props) => props.theme.baseLabel};
    font-style: italic;
  }
  &.Full {
    flex-grow: 1;
  }

  &.Medium {
    width: 12.5rem;
  }

  &.Short {
    width: 4.125rem;
  }

  &.Error {
    border: 1px solid ${(props) => props.theme.error};
  }

  &:has(input:focus),
  &:has(select:focus) {
    outline: 1px solid ${(props) => props.theme.primaryDark};
  }
`

export const InputStringStyle = styled(baseInputStyle)``

export const InputNumberStyle = styled(baseInputStyle)`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const InputSelectStyle = styled(baseInputStyle)``

export const InputRadioStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 0;
  align-self: stretch;

  background: ${(props) => props.theme.none};
  border: none;
  outline: none;

  border: 1px solid transparent;
  border-radius: 6px;

  &.Error {
    border: 1px solid ${(props) => props.theme.error};
  }
`

export const InputRadioOptionStyle = styled.label`
  ${fonts.buttonM};
  color: ${(props) => props.theme.baseText};

  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.25rem;
  flex: 1 0 0;

  white-space: nowrap;

  border: 1px solid transparent;
  border-radius: 6px;
  background: ${(props) => props.theme.baseButton};
  text-transform: uppercase;
  outline: none;

  &:has(:checked) {
    border: 1px solid ${(props) => props.theme.secondary};
    background: ${(props) => props.theme.secondaryLight};
  }

  > input {
    appearance: none;
    width: 1px;
    height: 1px;

    &:focus {
      outline: none;
    }
  }

  > svg {
    color: ${(props) => props.theme.secondary};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:not(:has(:checked)) {
    background: ${(props) => props.theme.baseHover};
    color: ${(props) => props.theme.baseSubtitle};
  }
`
