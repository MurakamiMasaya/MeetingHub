import { BasicLabel } from '@/components/uis/BasicLabel'
import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import { UseFormRegisterReturn } from 'react-hook-form'

const Wrapper = styled('div')`
  display: grid;
  gap: 5px;
`
const MainText = styled('p')`
  font-size: 15px;
  font-weight: bold;
`
const LabelWrapper = styled('div')`
  align-items: center;
  display: flex;
  gap: 5px;
`
const Label = styled('label')`
  font-size: 15px;
  font-weight: 600;
`
const CustomTextField = styled(TextField)`
  width: 100%;
  .MuiOutlinedInput-root {
    background: white;
  }
`

export interface InputTextareaProps {
  // NOTE:アクション
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  // NOTE:エラーハンドリング
  register?: UseFormRegisterReturn
  error?: boolean
  helperText?: string
  // NOTE:必須項目
  label?: string
  value?: string
  disabled?: boolean
  placeholder?: string
  name: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'
  //NOTE:追加項目
  autoFocus?: boolean
  maxLength?: number
  maxRows?: number
  readOnly?: boolean
  mainText?: string
  subTexts?: string[] //複数入ることを想定
  isRequired?: boolean
}

export const InputTextarea: React.FC<InputTextareaProps> = ({
  onChange,
  onKeyDown,
  onBlur,
  onFocus,
  register,
  error = false,
  helperText = '',
  label,
  value,
  disabled = false,
  placeholder,
  type = 'text',
  name,
  autoFocus = false,
  maxLength = 1000,
  maxRows = 50,
  readOnly,
  mainText,
  isRequired = false
}) => {
  return (
    <Wrapper>
      {label ? (
        <LabelWrapper>
          <Label htmlFor={label}>{label}</Label>
          <BasicLabel isRequired={isRequired!}>必須</BasicLabel>
        </LabelWrapper>
      ) : null}
      {mainText ? <MainText>{mainText}</MainText> : null}
      <CustomTextField
        onChange={onChange}
        onKeyDown={() => onKeyDown}
        onBlur={onBlur}
        onFocus={onFocus}
        error={error ?? false}
        helperText={helperText}
        multiline
        tabIndex={0}
        id={label ?? ''}
        name={name}
        type={type}
        disabled={disabled ?? false}
        autoFocus={autoFocus ?? false}
        placeholder={placeholder ?? ''}
        value={value}
        maxRows={maxRows ?? 50}
        inputProps={{
          maxLength,
          style: {
            height: '127px'
          },
          readOnly
        }}
        {...register}
      />
    </Wrapper>
  )
}
