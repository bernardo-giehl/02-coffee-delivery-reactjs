import styled from 'styled-components'

import { fonts } from '../../styles/fonts'

export const CheckoutForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 2rem;
  padding-top: 2.5rem;

  h4 {
    ${fonts.titleXS};
    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const CheckoutContainer = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  gap: 0.75rem;
`

export const CheckoutAddress = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  border-radius: 6px;
  background-color: ${(props) => props.theme.baseCard};
`

export const CheckoutPayment = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  border-radius: 6px;
  background-color: ${(props) => props.theme.baseCard};
`

export const CheckoutProducts = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`

export const CheckoutInputs = styled.div`
  display: grid;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`

export const CheckoutInputsInline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`

export type CheckoutDescriptionVariant =
  | 'primaryDark'
  | 'primary'
  | 'primaryLight'
  | 'secondaryDark'
  | 'secondary'
  | 'secondaryLight'
  | 'baseText'

interface CheckoutDescriptionProps {
  $variantColor: CheckoutDescriptionVariant
}

export const CheckoutDescription = styled.div<CheckoutDescriptionProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;

  svg {
    color: ${(props) => props.theme[props.$variantColor]};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  p {
    color: ${(props) => props.theme.baseSubtitle};
  }

  span {
    ${fonts.textS};
    color: ${(props) => props.theme.baseText};
  }
`

export const CheckoutConfirm = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.baseCard};

  > button {
    ${fonts.buttonG};
    display: flex;
    padding: 0.75rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    align-self: stretch;

    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme.primary};

    color: ${(props) => props.theme.white};
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.primaryDark};
    }
  }
`

export const CheckoutTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`

export const CheckoutTotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  > span {
    ${fonts.textS};
    color: ${(props) => props.theme.baseText};
  }

  > p {
    ${fonts.textL};
    color: ${(props) => props.theme.baseSubtitle};
  }
`
