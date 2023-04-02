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

const FooterComponent = styled.footer`
  height: auto;
  background-color: #29264f;
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin: 0 auto;
  max-width: 1000px;
  width: 80%;
`

const Link = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  margin-right: 8px;
`

export default Footer
