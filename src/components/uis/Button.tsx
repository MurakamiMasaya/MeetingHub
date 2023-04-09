import { mediaQuery } from '@/hooks'
import styled from '@emotion/styled'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  color?: string
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    children,
    color = '#294BA4',
    size = 'medium',
    onClick,
    disabled = false
  }) => {
    return (
      <StyledButton
        onClick={onClick}
        size={size}
        color={color}
        disabled={disabled ?? false}
      >
        {children}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'

const StyledButton = styled.button<{
  size: string
  color: string
  disabled: boolean
}>`
  border: none;
  border-radius: 5px;
  padding: 16px 24px;
  margin: 36px auto;
  width: 100%;
  background-color: ${({ color }) => color};
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  font-size: 24px;
  font-weight: bold;
  ${mediaQuery('sp')} {
    font-size: 16px;
    margin: 24px auto;
  }
`
