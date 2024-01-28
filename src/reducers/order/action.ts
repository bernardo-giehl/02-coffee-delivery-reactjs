import { ShopType } from '../shop/reducer'

export enum OrderActionTypes {
  add = 'add',
}

export interface OrderProps {
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
export function orderAddAction({
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
  return {
    type: OrderActionTypes.add,
    payload: {
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
    },
  }
}
