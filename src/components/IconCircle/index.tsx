import { ReactNode } from 'react'

import { IconCircleSpan, IconCircleVariant } from './styles'

interface PropsIconCircle {
  children: ReactNode
  variantColor: IconCircleVariant
}

export function IconCircle({ children, variantColor }: PropsIconCircle) {
  return (
    <IconCircleSpan $variantColor={variantColor}>{children}</IconCircleSpan>
  )
}
