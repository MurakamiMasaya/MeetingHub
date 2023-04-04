import styled from '@emotion/styled'
import React from 'react'

type InputProps = {
  label: string
  id: string
  placeholder: string
  maxLength: number
  value: string
  setValue: (value: string) => void
  required: boolean
}

export const InputField: React.FC<InputProps> = React.memo(
  ({ label, id, placeholder, maxLength, value, setValue, required }) => {
    return (
      <InputFieldContainer>
        <Label htmlFor={id}>
          {label}
          {required && <Required>(必須)</Required>}
        </Label>
        <Input
          type="text"
          id={id}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={required}
        />
      </InputFieldContainer>
    )
  }
)

InputField.displayName = 'InputField'

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

const Label = styled.label`
  font-weight: bold;
`

const Required = styled.span`
  color: #ff0606;
`

const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 16px 24px;
`
