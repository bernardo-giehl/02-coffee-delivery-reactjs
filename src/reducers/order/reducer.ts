import { produce } from 'immer'

import { OrderActionTypes, OrderProps } from './action'
import { ShopType } from '../shop/reducer'

export interface OrderType {
  id: number
  cep: string
  rua: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  uf: string
  pagamento: 'credito' | 'debito' | 'dinheiro'
  shop: ShopType[]
  valorItem: number
  valorEntrega: number
  valorTotal: number
}

interface orderReducerAction {
  payload: OrderProps
  type: OrderActionTypes
}

export function orderReducer(state: OrderType[], action: orderReducerAction) {
  const {
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
  } = action.payload

  switch (action.type) {
    case OrderActionTypes.add: {
      return produce(state, (draft) => {
        const id =
          (state.length === 0 ? 0 : Math.max(...state.map((ord) => ord.id))) + 1
        draft.push({
          id,
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
        })
      })
    }
    default:
      return state
  }
}
