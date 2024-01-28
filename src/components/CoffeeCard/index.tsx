import { useState } from 'react'
import { Minus, Plus, Trash } from 'phosphor-react'

import { useShop } from '../../hooks/useShop'
import { CoffeeType } from '../../reducers/shop/reducer'

import {
  Card,
  CardImage,
  CardDescription,
  CardBuy,
  CardInput,
  CardLinha,
} from './styles'

interface coffeeProps {
  coffee: CoffeeType
  quantity: number
}

export function CoffeCard({ coffee, quantity }: coffeeProps) {
  const { shopAdd, shopRemove } = useShop()

  const [quantityInput, setQuantityInput] = useState(quantity)

  function handleChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    let quantityChange = parseInt(e.target.value)
    if (quantityChange > 99) {
      quantityChange = 99
    } else if (quantityChange < 1) {
      quantityChange = 1
    }
    if (quantityChange > quantityInput) {
      shopAdd({ coffee, quantity: quantityChange - quantityInput })
    } else if (quantityChange < quantityInput) {
      console.log(quantityInput + ' - ' + quantityChange)
      shopRemove({
        coffee,
        quantity: quantityInput - quantityChange,
      })
    }
    setQuantityInput(quantityChange)
  }

  function handleClickMinus(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault()
    if (quantityInput > 1) {
      shopRemove({ coffee, quantity: 1 })
      setQuantityInput(quantityInput - 1)
    }
  }

  function handleClickPlus(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    if (quantityInput < 99) {
      shopAdd({ coffee, quantity: 1 })
      setQuantityInput(quantityInput + 1)
    }
  }

  function handleClickTrash(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault()
    shopRemove({ coffee, quantity: quantityInput })
  }

  return (
    <>
      <Card>
        <CardImage>
          <img src={coffee.image} alt="" />
          <CardDescription>
            <p>{coffee.name}</p>
            <CardBuy>
              <CardInput>
                <button onClick={handleClickMinus}>
                  <Minus size={18} weight="bold" />
                </button>
                <input
                  id={coffee.id.toString()}
                  type="number"
                  min={1}
                  value={quantityInput}
                  onChange={handleChangeQuantity}
                />
                <button onClick={handleClickPlus}>
                  <Plus size={18} weight="bold" />
                </button>
              </CardInput>
              <button onClick={handleClickTrash}>
                <Trash size={22} />
                Remover
              </button>
            </CardBuy>
          </CardDescription>
        </CardImage>
        <b>
          R$ <span>{coffee.price}</span>
        </b>
      </Card>
      <CardLinha />
    </>
  )
}
