import styled from '@emotion/styled'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { ReactNode, useCallback, useRef } from 'react'

const CustomMuiButton = styled(MuiButton)<{ variant?: string; color?: string }>`
  color: ${({ variant, color }) => {
    if (variant === 'contained' && color !== 'primary') {
      return 'white'
    }
    return null
  }};
  &.-full-height {
    height: 100%;
  }
  &.-full-width {
    width: 100%;
  }
  &.-half-width {
    width: 50%;
  }
  &.-bg-white {
    background-color: white;
  }
`

const CustomCircularProgress = styled(CircularProgress)<{ className?: string }>`
  color: ${({ className }) => (className === 'contained' ? 'white' : null)};
`

interface ButtonProps
  extends Pick<MuiButtonProps, Exclude<keyof MuiButtonProps, 'color'>> {
  variant?: 'text' | 'contained' | 'outlined'
  color?: MuiButtonProps['color']
  children: ReactNode
  startIcon?: ReactNode
  endIcon?: ReactNode
  size?: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset'
  className?: string
  isDisabled?: boolean
  isLoading?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  fullWidth?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  startIcon,
  endIcon,
  type = 'button',
  color = 'primary',
  size = 'medium',
  variant = 'contained',
  isDisabled,
  isLoading = false,
  onClick,
  fullWidth = false
}) => {
  // 多重送信防止用(3秒間はボタンをクリックできない)
  const processing = useRef(false)
  const handleButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (processing.current) return
      processing.current = true

      if (onClick) onClick(event)
      // FIXME: ユーザーの動作環境が重たいことにより3秒以上待機することで、多重送信が発生する可能性がある
      setTimeout(() => {
        processing.current = false
      }, 3000)
    },
    [onClick]
  )

  return (
    <CustomMuiButton
      variant={variant}
      color={color}
      size={size}
      type={type}
      className={className}
      onClick={handleButton}
      disabled={isDisabled}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {!isLoading && <p>{children}</p>}
      {isLoading && <CustomCircularProgress className={variant} size={25} />}
    </CustomMuiButton>
  )
}
