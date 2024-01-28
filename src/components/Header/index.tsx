import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { useShop } from '../../hooks/useShop'

import logoDefault from '../../assets/logoDefault.svg'
// import logoDark from '../../assets/logoDark.svg'

import { HeaderContainer, HeaderNavigation } from './styles'

export function Header() {
  const { shopState } = useShop()

  return (
    <HeaderContainer>
      <Link to="/" title="Selecionar mais produtos">
        <img src={logoDefault} alt="" />
      </Link>
      <HeaderNavigation>
        <div>
          <MapPin size={24} weight="fill" />
          <span>Dois Irmãos, RS</span>
        </div>
        <Link to="/checkout" title="Ir para o carrinho">
          <ShoppingCart size={24} weight="fill" />
          {shopState && shopState.length > 0 && (
            <div>
              <span>{shopState.length}</span>
            </div>
          )}
        </Link>
      </HeaderNavigation>
    </HeaderContainer>
  )
}
