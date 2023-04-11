import { mediaQuery } from '@/hooks'
import { styled } from '@mui/material/styles'

export const BaseContainer = styled('div')`
  margin: 0 auto;
  width: 80%;
  word-break: break-all;
  max-width: 1000px;
  ${mediaQuery('sp')} {
    width: 90%;
  }
`
