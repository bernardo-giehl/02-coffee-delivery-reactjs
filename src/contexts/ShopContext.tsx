import { ReactNode, createContext, useEffect, useReducer } from 'react'

import { ShopType, shopReducer } from '../reducers/shop/reducer'
import {
  ShopProps,
  shopAddAction,
  shopRemoveAction,
  shopResetAction,
} from '../reducers/shop/action'

interface ShopContextType {
  shopState: ShopType[]
  shopAdd: ({ coffee, quantity }: ShopProps) => void
  shopRemove: ({ coffee, quantity }: ShopProps) => void
  shopReset: () => void
}

export const ShopContext = createContext({} as ShopContextType)

interface ShopContextProviderProps {
  children: ReactNode
}

export function ShopContextProvider({ children }: ShopContextProviderProps) {
  const [shopState, dispath] = useReducer(shopReducer, [], (initialState) => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:shop-state-1.0.0',
    )
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return initialState
  })

  useEffect(() => {
    const shopStateJSON = JSON.stringify(shopState)
    localStorage.setItem('@coffee-delivery:shop-state-1.0.0', shopStateJSON)
  }, [shopState])

  function shopAdd({ coffee, quantity }: ShopProps) {
    dispath(shopAddAction({ coffee, quantity }))
  }

  function shopRemove({ coffee, quantity }: ShopProps) {
    dispath(shopRemoveAction({ coffee, quantity }))
  }

  function shopReset() {
    dispath(shopResetAction())
  }

  return (
    <ShopContext.Provider
      value={{
        shopState,
        shopAdd,
        shopRemove,
        shopReset,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
