import { mediaQuery } from '@/hooks'
import { BaseContainer } from '@/themes'
import styled from '@emotion/styled'
import { NextPage } from 'next'

export const Footer: NextPage = () => {
  return (
    <FooterComponent>
      <FooterContainer>
        <Link href="#">お問い合わせ</Link>
        <Link href="#">プライバシーポリシー</Link>
        <Link href="#">利用規約</Link>
      </FooterContainer>
    </FooterComponent>
  )
}

const FooterComponent = styled('footer')`
  height: auto;
  background-color: #29264f;
`

const FooterContainer = styled(BaseContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 72%;
`

const Link = styled('a')`
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  margin-right: 8px;
  ${mediaQuery('sp')} {
    font-size: 12px;
  }
`

export default Footer
