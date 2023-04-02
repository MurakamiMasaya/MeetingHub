import { mediaQuery } from '@/hooks'
import styled from '@emotion/styled'
import { NextPage } from 'next'

export const Header: NextPage = () => {
  return (
    <HeaderComponent>
      <HeaderContainer>
        <LogoTitleWrapper>
          <Logo src="/logo.svg" alt="Logo" />
          <Title>みんなの集合</Title>
        </LogoTitleWrapper>
        <Description>
          みんなで集合は距離や運賃、移動時間、イベントの目的などを踏まえて、
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
  padding: 16px 8px;
  margin: 0 auto;
  max-width: 1000px;
  ${mediaQuery('sp')} {
    display: block;
  }
`
const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  height: 40px;
`

const Title = styled.h1`
  font-size: 36px;
  margin-left: 8px;
  color: #4060b1;
  ${mediaQuery('tab')} {
    font-size: 32px;
    margin: 4px 0 4px 4px;
  }
`

const Description = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-left: 16px;
  max-width: 50%;
  ${mediaQuery('tab')} {
    margin: 0 0 0 16px;
    font-size: 12px;
  }
  ${mediaQuery('sp')} {
    margin-left: 8px;
    max-width: 100%;
  }
`
