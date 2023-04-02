import styled from '@emotion/styled'
import { NextPage } from 'next'

export const Header: NextPage = () => {
  return (
    <HeaderComponent>
      <HeaderContainer>
        <Logo src="/logo.svg" alt="Logo" />
        <Title>みんなの集合</Title>
        <Description>
          みんなで集合は距離や運賃、移動時間、イベントの目的などを踏まえて、
          <br />
          ぴったりの集合場所を教えてくれます
        </Description>
      </HeaderContainer>
    </HeaderComponent>
  )
}

const HeaderComponent = styled.div`
  height: auto;
  background-color: #e3eff5;
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 0 auto;
  max-width: 1000px;
`

const Logo = styled.img`
  height: 40px;
`

const Title = styled.h1`
  font-size: 32px;
  margin-left: 8px;
  color: #4060b1;
`

const Description = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`
