import { mediaQuery } from '@/hooks'
import { styled } from '@mui/material/styles'

/**
 * 統一したタイトルのレイアウトを実装するために設置
 * 使用ファイルでインポートし必要であれば上書きでレイアウトを調整すること
 */
export const BaseTitle = styled('p')`
  color: #294ba4;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  &.-orange {
    color: orange;
  }
  &.-grey {
    color: #c4c4c4;
  }
  &.-blue {
    color: #edf7f9;
  }
  &.-white {
    color: white;
  }
  &.-left {
    text-align: left;
  }
  &.-small {
    font-size: 20px;
  }
  ${mediaQuery('sp')} {
    font-size: 24px;
    &.-small {
      font-size: 16px;
    }
  }
`
