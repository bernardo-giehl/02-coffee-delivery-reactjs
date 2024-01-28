import styled from 'styled-components'

import { fonts } from '../../styles/fonts'

export const WelcomeContainer = styled.div`
  width: 100%;
  max-width: 75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5.75rem;
  margin: 1rem auto;
  gap: 3.5rem;

  h2 {
    ${fonts.titleXL};
    color: ${(props) => props.theme.baseTitle};
  }

  h3 {
    ${fonts.textL};
    color: ${(props) => props.theme.baseSubtitle};
  }
`
export const WelcomeTitles = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
`

export const WelcomeImage = styled.img`
  width: 45%;
  margin: 1rem auto;
`

export const Content = styled.div`
  margin: 4rem 0rem 6.75rem 0rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0rem 2.5rem;

  p {
    color: ${(props) => props.theme.baseText};
    min-width: 14rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    height: 3rem;
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.375rem;

  h4 {
    ${fonts.titleL};
    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const ProductsListContainer = styled.div`
  width: 100%;
  max-width: 75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem 2rem;
`
