import { mediaQuery } from '@/hooks'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

const BaseLabel = styled('label')`
  border-radius: 5px;
  font-size: 14px;
  overflow: hidden;
  padding: 4px 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${mediaQuery('sp')} {
    font-size: 12px;
    padding: 2px 4px;
  }
`
const NewLabel = styled(BaseLabel)`
  background-color: #f08e35;
  color: white;
  &.-card {
    font-weight: bold;
    left: 5px;
    position: absolute;
    top: 10px;
  }
`
const RequiredLabel = styled('label')`
  background: red;
  border-radius: 5px;
  color: white;
  font-size: 12px;
  padding: 0 5px;
`

export type BasicLabelProps = {
  children: ReactNode
  isNew?: boolean
  isRequired?: boolean
}

export const BasicLabel: React.FC<BasicLabelProps> = ({
  children,
  isNew,
  isRequired
}) => {
  return (
    <>
      {/* 新着ラベル */}
      {isNew ? <NewLabel>{children}</NewLabel> : null}
      {/* 必須ラベル */}
      {isRequired ? <RequiredLabel>{children}</RequiredLabel> : null}
    </>
  )
}
