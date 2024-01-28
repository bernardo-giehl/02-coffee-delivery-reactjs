import styled from 'styled-components'

export type IconCircleVariant =
  | 'primaryDark'
  | 'primary'
  | 'primaryLight'
  | 'secondaryDark'
  | 'secondary'
  | 'secondaryLight'
  | 'baseText'

interface IconCircleProps {
  $variantColor: IconCircleVariant
}

export const IconCircleSpan = styled.span<IconCircleProps>`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 999px;
  background-color: ${(props) => props.theme[props.$variantColor]};

  svg {
    color: ${(props) => props.theme.background};
    width: 1rem;
    height: 1rem;
  }
`
