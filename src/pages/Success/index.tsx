import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { IconCircle } from '../../components/IconCircle'
import imageSuccess from '../../assets/imageSuccess.svg'

import { useOrder } from '../../hooks/useOrder'

import {
  SuccessContainer,
  SuccessMessage,
  SuccessResult,
  SuccessResultItem,
} from './styles'

export function Success() {
  const { orderState } = useOrder()

  const orderLast =
    orderState[
      orderState.findIndex((order) => {
        return order.id === Math.max(...orderState.map((ord) => ord.id))
      })
    ]

  if (!orderLast?.id) {
    return null
  }

  const { rua, numero, bairro, cidade, uf, pagamento } = orderLast

  const formaPagamento =
    pagamento === 'dinheiro'
      ? 'Dinheiro'
      : 'Cartão de ' + (pagamento === 'debito' ? 'Dédito' : 'Crédito')

  return (
    <SuccessContainer>
      <SuccessMessage>
        <p>Uhu! Pedido confirmado</p>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <SuccessResult>
          <div>
            <SuccessResultItem>
              <IconCircle variantColor="secondary">
                <MapPin weight="fill" />
              </IconCircle>
              <div>
                <p>
                  Entrega em{' '}
                  <b>
                    {rua}, {numero}
                  </b>
                  <br />
                  {bairro} - {cidade}, {uf}
                </p>
              </div>
            </SuccessResultItem>

            <SuccessResultItem>
              <IconCircle variantColor="primary">
                <Timer weight="fill" />
              </IconCircle>
              <div>
                <p>
                  Previsão de entrega
                  <br />
                  <b>20 min - 30 min</b>
                </p>
              </div>
            </SuccessResultItem>

            <SuccessResultItem>
              <IconCircle variantColor="primaryDark">
                <CurrencyDollar />
              </IconCircle>
              <div>
                <p>
                  Pagamento na entrega
                  <br />
                  <b>{formaPagamento}</b>
                </p>
              </div>
            </SuccessResultItem>
          </div>
        </SuccessResult>
      </SuccessMessage>
      <img src={imageSuccess} alt="" />
    </SuccessContainer>
  )
}
