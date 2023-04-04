import styled from '@emotion/styled'
import React from 'react'

type TextAreaProps = {
  label: string
  id: string
  placeholder: string
  maxLength: number
  value: string
  setValue: (value: string) => void
  required: boolean
  rows: number
  cols: number
}

export const TextArea: React.FC<TextAreaProps> = React.memo(
  ({
    label,
    id,
    placeholder,
    maxLength,
    value,
    setValue,
    required,
    rows,
    cols
  }) => {
    return (
      <TextAreaContainer>
        <Label htmlFor={id}>
          {label}
          {required && <Required>(必須)</Required>}
        </Label>
        <TextAreaInput
          id={id}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={required}
          rows={rows}
          cols={cols}
        />
      </TextAreaContainer>
    )
  }
)

TextArea.displayName = 'TextArea'

const TextAreaContainer = styled.div`
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

const TextAreaInput = styled.textarea`
  border: none;
  border-radius: 5px;
  padding: 16px 24px;
`
