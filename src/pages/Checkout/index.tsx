import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { useShop } from '../../hooks/useShop'
import { useOrder } from '../../hooks/useOrder'

import {
  InputNumber,
  InputRadio,
  InputSelect,
  InputString,
} from '../../components/LabelInput'
import { CoffeCard } from '../../components/CoffeeCard'

import {
  CheckoutForm,
  CheckoutContainer,
  CheckoutAddress,
  CheckoutPayment,
  CheckoutProducts,
  CheckoutConfirm,
  CheckoutDescription,
  CheckoutInputs,
  CheckoutInputsInline,
  CheckoutTotal,
  CheckoutTotalItem,
} from './styles'

const newOrderFormValidationSchema = zod.object({
  cep: zod
    .string({ invalid_type_error: 'Informe o CEP' })
    .min(9, 'Informe um CEP correto')
    .max(9, 'Informe um CEP correto'),
  rua: zod.string().min(1, 'Informe a rua'),
  numero: zod.number().min(1, 'Informe o número'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  pagamento: zod.enum(['credito', 'debito', 'dinheiro'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { shopState, shopReset } = useShop()
  const { orderAdd } = useOrder()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  function handleNewOrder(data: NewOrderFormData) {
    if (shopState.length === 0) {
      return alert('Nenhum produto foi selecionado')
    }

    const { cep, rua, numero, complemento, bairro, cidade, uf, pagamento } =
      data

    orderAdd({
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
      pagamento,
      shop: shopState,
      valorItem,
      valorEntrega,
      valorTotal,
    })

    shopReset()

    navigate('/success')
  }

  let valorItem = 0
  let quantidadeItem = 0
  let valorEntrega = 0
  let valorTotal = 0
  let valorItemFormat = ''
  let valorEntregaFormat = ''
  let valorTotalFormat = ''

  if (shopState) {
    valorItem = shopState.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.coffee.price * currentValue.quantity,
      0,
    )
    quantidadeItem = shopState.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0,
    )
    valorEntrega = 0.49 * quantidadeItem
    valorTotal = valorItem + valorEntrega
  }
  valorItemFormat = valorItem.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  valorEntregaFormat = valorEntrega.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  valorTotalFormat = valorTotal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const optionsUf = [
    { id: '', description: 'UF' },
    { id: 'AC', description: 'AC' },
    { id: 'AL', description: 'AL' },
    { id: 'AM', description: 'AM' },
    { id: 'AP', description: 'AP' },
    { id: 'BA', description: 'BA' },
    { id: 'CE', description: 'CE' },
    { id: 'DF', description: 'DF' },
    { id: 'ES', description: 'ES' },
    { id: 'GO', description: 'GO' },
    { id: 'MA', description: 'MA' },
    { id: 'MG', description: 'MG' },
    { id: 'MT', description: 'MT' },
    { id: 'MS', description: 'MS' },
    { id: 'PA', description: 'PA' },
    { id: 'PB', description: 'PB' },
    { id: 'PE', description: 'PE' },
    { id: 'PI', description: 'PI' },
    { id: 'PR', description: 'PR' },
    { id: 'RJ', description: 'RJ' },
    { id: 'RN', description: 'RN' },
    { id: 'RO', description: 'RO' },
    { id: 'RR', description: 'RR' },
    { id: 'RS', description: 'RS' },
    { id: 'SC', description: 'SC' },
    { id: 'SE', description: 'SE' },
    { id: 'SP', description: 'SP' },
    { id: 'TO', description: 'TO' },
  ]

  const optionsPagamento = [
    {
      id: 'credito',
      description: 'Cartão de Crédito',
      img: <CreditCard size={22} />,
    },
    { id: 'debito', description: 'Cartão de Débito', img: <Bank size={22} /> },
    { id: 'dinheiro', description: 'Dinheiro', img: <Money size={22} /> },
  ]

  return (
    <>
      <CheckoutForm onSubmit={handleSubmit(handleNewOrder)} action="">
        <CheckoutContainer>
          <h4>Complete seu pedido</h4>
          <CheckoutAddress>
            <CheckoutDescription $variantColor="primaryDark">
              <MapPinLine size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </CheckoutDescription>
            <CheckoutInputs>
              <InputString
                id="cep"
                variantSize="Medium"
                error={errors.cep && errors.cep.message}
                placeholder="CEP"
                {...register('cep')}
              />
              <InputString
                id="rua"
                variantSize="Full"
                error={errors.rua && errors.rua.message}
                placeholder="Rua"
                {...register('rua')}
              />
              <CheckoutInputsInline>
                <InputNumber
                  id="numero"
                  variantSize="Medium"
                  error={errors.numero && errors.numero.message}
                  placeholder="Número"
                  {...register('numero', { valueAsNumber: true })}
                />
                <InputString
                  id="complemento"
                  variantSize="Full"
                  error={errors.complemento && errors.complemento.message}
                  placeholder="Complemento"
                  optional={true}
                  {...register('complemento')}
                />
              </CheckoutInputsInline>
              <CheckoutInputsInline>
                <InputString
                  id="bairro"
                  variantSize="Medium"
                  error={errors.bairro && errors.bairro.message}
                  placeholder="Bairro"
                  {...register('bairro')}
                />
                <InputString
                  id="cidade"
                  variantSize="Full"
                  error={errors.cidade && errors.cidade.message}
                  placeholder="Cidade"
                  {...register('cidade')}
                />
                <InputSelect
                  id="uf"
                  variantSize="Short"
                  error={errors.uf && errors.uf.message}
                  placeholder="UF"
                  options={optionsUf}
                  {...register('uf')}
                />
              </CheckoutInputsInline>
            </CheckoutInputs>
          </CheckoutAddress>
          <CheckoutPayment>
            <CheckoutDescription $variantColor="secondary">
              <CurrencyDollar size={22} />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </CheckoutDescription>
            <InputRadio
              id="pagamento"
              variantSize="Full"
              error={errors.pagamento && errors.pagamento.message}
              placeholder="Pagamento"
              options={optionsPagamento}
              {...register('pagamento')}
            />
          </CheckoutPayment>
        </CheckoutContainer>
        <CheckoutProducts>
          <h4>Cafés selecionados</h4>
          <CheckoutConfirm>
            {shopState &&
              shopState.map((shopCoffe) => (
                <CoffeCard
                  key={shopCoffe.id}
                  coffee={shopCoffe.coffee}
                  quantity={shopCoffe.quantity}
                />
              ))}
            <CheckoutTotal>
              <CheckoutTotalItem>
                <span>Total de itens</span>
                <span>{valorItemFormat}</span>
              </CheckoutTotalItem>
              <CheckoutTotalItem>
                <span>Entrega</span>
                <span>{valorEntregaFormat}</span>
              </CheckoutTotalItem>
              <CheckoutTotalItem>
                <p>
                  <b>Total</b>
                </p>
                <p>
                  <b>{valorTotalFormat}</b>
                </p>
              </CheckoutTotalItem>
            </CheckoutTotal>
            <button type="submit">Confirmar Pedido</button>
          </CheckoutConfirm>
        </CheckoutProducts>
      </CheckoutForm>
    </>
  )
}
