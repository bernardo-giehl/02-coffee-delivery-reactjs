import { produce } from 'immer'

import { ShopActionTypes, ShopActions } from './action'

export interface CoffeeType {
  id: number
  name: string
  description: string
  price: number
  image: string
  tag: string[]
}

export interface ShopType {
  id: number
  coffee: CoffeeType
  quantity: number
}

export function shopReducer(state: ShopType[], action: ShopActions) {
  let currencyIndex: number

  switch (action.type) {
    case ShopActionTypes.add: {
      const { coffee, quantity } = action.payload
      currencyIndex = state.findIndex((shop) => {
        return shop.coffee.id === coffee.id
      })

      if (currencyIndex < 0) {
        return produce(state, (draft) => {
          draft.push({
            id:
              (state.length === 0
                ? 0
                : Math.max(...state.map((shop) => shop.id))) + 1,
            coffee,
            quantity,
          })
        })
      }

      return produce(state, (draft) => {
        draft[currencyIndex].quantity = draft[currencyIndex].quantity + quantity
      })
    }
    case ShopActionTypes.remove: {
      const { coffee, quantity } = action.payload
      currencyIndex = state.findIndex((shop) => {
        return shop.coffee.id === coffee.id
      })

      if (currencyIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        if (draft[currencyIndex].quantity <= quantity) {
          draft.splice(currencyIndex, 1)
        } else {
          draft[currencyIndex].quantity =
            draft[currencyIndex].quantity - quantity
        }
      })
    }
    case ShopActionTypes.reset: {
      return []
    }
    default:
      return state
  }
}
