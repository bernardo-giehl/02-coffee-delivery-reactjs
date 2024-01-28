import styled from 'styled-components'

import { fonts } from '../../styles/fonts'

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;

  > img {
    margin-top: 6rem;
    width: 45%;
  }
`

export const SuccessMessage = styled.div`
  width: 55%;

  > p {
    ${fonts.titleL};
    color: ${(props) => props.theme.primaryDark};
  }

  > span {
    ${fonts.textL};
    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const SuccessResult = styled.div`
  margin-top: 2.5rem;

  border: double 1px transparent;
  border-radius: 6px 36px;

  background-image: linear-gradient(
      ${(props) => props.theme.background},
      ${(props) => props.theme.background}
    ),
    radial-gradient(
      circle at top left,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.secondary}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    padding: 2.5rem;
    flex-shrink: 0;
  }
`
export const SuccessResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
