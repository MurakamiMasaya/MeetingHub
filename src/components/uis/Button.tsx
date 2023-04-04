import { mediaQuery } from '@/hooks'
import styled from '@emotion/styled'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  color?: string
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({ children, color = '#294BA4', size = 'medium', onClick }) => {
    return (
      <StyledButton onClick={onClick} size={size} color={color}>
        {children}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'

const StyledButton = styled.button<{ size; color }>`
  border: none;
  border-radius: 5px;
  padding: 16px 24px;
  margin: 36px auto;
  width: 100%;
  background-color: ${({ color }) => color};
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  ${mediaQuery('sp')} {
    font-size: 16px;
    margin: 24px auto;
  }
`
