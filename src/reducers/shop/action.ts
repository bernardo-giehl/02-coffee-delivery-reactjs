import { CoffeeType } from './reducer'

export enum ShopActionTypes {
  add = 'add',
  remove = 'remove',
  reset = 'reset',
}

export interface ShopProps {
  coffee: CoffeeType
  quantity: number
}

export type ShopActions =
  | {
      type: ShopActionTypes.add | ShopActionTypes.remove
      payload: ShopProps
    }
  | {
      type: ShopActionTypes.reset
    }

export function shopAddAction({ coffee, quantity }: ShopProps) {
  return {
    type: ShopActionTypes.add,
    payload: { coffee, quantity },
  } satisfies ShopActions
}

export function shopRemoveAction({ coffee, quantity }: ShopProps) {
  return {
    type: ShopActionTypes.remove,
    payload: { coffee, quantity },
  } satisfies ShopActions
}

export function shopResetAction() {
  return {
    type: ShopActionTypes.reset,
  } satisfies ShopActions
}
