import { ReactNode, createContext, useEffect, useReducer } from 'react'

import { OrderType, orderReducer } from '../reducers/order/reducer'
import { OrderProps, orderAddAction } from '../reducers/order/action'

interface OrderContextType {
  orderState: OrderType[]
  orderAdd: ({
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    uf,
    pagamento,
    shop,
    valorItem,
    valorEntrega,
    valorTotal,
  }: OrderProps) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderState, dispath] = useReducer(orderReducer, [], (initialState) => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:order-state-1.0.0',
    )
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return initialState
  })

  useEffect(() => {
    const orderStateJSON = JSON.stringify(orderState)
    localStorage.setItem('@coffee-delivery:order-state-1.0.0', orderStateJSON)
  }, [orderState])

  function orderAdd({
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    uf,
    pagamento,
    shop,
    valorItem,
    valorEntrega,
    valorTotal,
  }: OrderProps) {
    dispath(
      orderAddAction({
        cep,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        uf,
        pagamento,
        shop,
        valorItem,
        valorEntrega,
        valorTotal,
      }),
    )
  }

  return (
    <OrderContext.Provider
      value={{
        orderState,
        orderAdd,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
