import { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { useShop } from '../../hooks/useShop'
import { CoffeeType } from '../../reducers/shop/reducer'

import { Card, CardTags, CardTag, CardBuy, CardInput } from './styles'

interface coffeeProps {
  coffee: CoffeeType
}

export function CoffeeCatalog({ coffee }: coffeeProps) {
  const { shopAdd } = useShop()

  const [quantity, setQuantity] = useState(1)

  function handleChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(parseInt(e.target.value))
  }

  function handleClickMinus(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault()
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleClickPlus(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    if (quantity < 99) {
      setQuantity(quantity + 1)
    }
  }

  function handleClickBuy(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    shopAdd({ coffee, quantity })
  }

  return (
    <Card>
      <img src={coffee.image} alt="" />
      <CardTags>
        {coffee.tag.map((tags) => (
          <CardTag key={tags}>{tags}</CardTag>
        ))}
      </CardTags>
      <p>{coffee.name}</p>
      <span>{coffee.description}</span>
      <CardBuy>
        <p>
          R$ <span>{coffee.price}</span>
        </p>
        <CardInput>
          <button type="button" onClick={handleClickMinus}>
            <Minus size={18} weight="bold" />
          </button>
          <input
            name="quantity"
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
            min={1}
            max={99}
          />
          <button type="button" onClick={handleClickPlus}>
            <Plus size={18} weight="bold" />
          </button>
        </CardInput>
        <button type="button" onClick={handleClickBuy}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </CardBuy>
    </Card>
  )
}
