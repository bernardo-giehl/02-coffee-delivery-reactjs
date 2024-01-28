import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { CoffeeCatalog } from '../../components/CoffeeCatalog'
import { IconCircle } from '../../components/IconCircle'
import imageHome from '../../assets/imageHome.png'

import {
  Content,
  WelcomeContainer,
  WelcomeTitles,
  WelcomeImage,
  ProductsContainer,
  ProductsListContainer,
} from './styles'

import { coffees } from '../../../coffees.json'

export function Home() {
  return (
    <>
      <WelcomeContainer>
        <WelcomeTitles>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <Content>
            <div>
              <p>
                <IconCircle variantColor="primaryDark">
                  <ShoppingCart weight="fill" />
                </IconCircle>
                Compra simples e segura
              </p>
              <p>
                <IconCircle variantColor="primary">
                  <Timer weight="fill" />
                </IconCircle>
                Entrega rápida e rastreada
              </p>
            </div>
            <div>
              <p>
                <IconCircle variantColor="baseText">
                  <Package weight="fill" />
                </IconCircle>
                Embalagem mantém o café intacto
              </p>
              <p>
                <IconCircle variantColor="secondary">
                  <Coffee weight="fill" />
                </IconCircle>
                O café chega fresquinho até você
              </p>
            </div>
          </Content>
        </WelcomeTitles>
        <WelcomeImage src={imageHome} />
      </WelcomeContainer>
      <ProductsContainer>
        <h4>Nossos cafés</h4>
        <ProductsListContainer>
          {coffees.map((coffee) => (
            <CoffeeCatalog key={coffee.id} coffee={coffee} />
          ))}
        </ProductsListContainer>
      </ProductsContainer>
    </>
  )
}
