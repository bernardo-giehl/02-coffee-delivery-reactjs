import { useContext } from 'react'

import { ShopContext } from '../contexts/ShopContext'

export function useShop() {
  return useContext(ShopContext)
}
