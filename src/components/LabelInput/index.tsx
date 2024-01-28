import { InputHTMLAttributes, ReactNode, forwardRef, LegacyRef } from 'react'

import {
  InputStringStyle,
  InputNumberStyle,
  InputRadioStyle,
  InputRadioOptionStyle,
  InputSelectStyle,
} from './styles'

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  id: string
  variantSize: 'Full' | 'Short' | 'Medium'
  error?: string
  optional?: boolean
}

interface InputStringProps extends InputProps {}
export const InputString = forwardRef(function InputString(
  { id, variantSize, error, optional, ...rest }: InputStringProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <InputStringStyle className={`${variantSize} ${error ? ' Error' : ''}`}>
      <input id={id} ref={ref} {...rest} />
      {optional && <span>Opcional</span>}
    </InputStringStyle>
  )
})

interface InputNumberProps extends InputProps {}
export const InputNumber = forwardRef(function InputNumber(
  { id, variantSize, error, optional, ...rest }: InputNumberProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <InputNumberStyle className={`${variantSize} ${error ? ' Error' : ''}`}>
      <input id={id} type="number" ref={ref} {...rest} />
      {optional && <span>Opcional</span>}
    </InputNumberStyle>
  )
})

interface InputRadioProps extends InputProps {
  options: {
    id: string
    description: string
    img?: ReactNode
  }[]
}
export const InputRadio = forwardRef(function InputRadio(
  { id, variantSize, error, options, optional, ...rest }: InputRadioProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <InputRadioStyle
      id={id}
      className={`${variantSize} ${error ? ' Error' : ''}`}
    >
      {options.map((option) => (
        <InputRadioOptionStyle key={option.id} htmlFor={option.id}>
          {option.img}
          <input
            id={option.id}
            type="radio"
            value={option.id}
            ref={ref}
            {...rest}
          />
          {option.description}
        </InputRadioOptionStyle>
      ))}
      {optional && <span>Opcional</span>}
    </InputRadioStyle>
  )
})

interface InputSelectProps extends InputProps {
  options: {
    id: string
    description: string
  }[]
}
export const InputSelect = forwardRef(function InputSelect(
  { id, variantSize, error, options, optional, ...rest }: InputSelectProps,
  ref: LegacyRef<HTMLSelectElement>,
) {
  return (
    <InputSelectStyle className={`${variantSize} ${error ? ' Error' : ''}`}>
      <select id={id} ref={ref} {...rest}>
        {options!.map((option) => (
          <option key={option.id} value={option.id}>
            {option.description}
          </option>
        ))}
      </select>
      {optional && <span>Opcional</span>}
    </InputSelectStyle>
  )
})
