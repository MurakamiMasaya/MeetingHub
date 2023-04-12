import { mediaQuery } from '@/hooks'
import { BaseContainer } from '@/themes'
import styled from '@emotion/styled'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

export const Header: NextPage = () => {
  const router = useRouter()

  return (
    <HeaderComponent>
      <HeaderContainer>
        <LogoTitleWrapper onClick={() => router.push('/')}>
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

const HeaderComponent = styled('div')`
  height: auto;
  background-color: #e3eff5;
`
const HeaderContainer = styled(BaseContainer)`
  display: flex;
  align-items: center;
  padding: 16px 8px;
  ${mediaQuery('sp')} {
    display: block;
  }
`
const LogoTitleWrapper = styled('div')`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`
const Logo = styled('img')`
  height: 40px;
`
const Title = styled('h1')`
  font-size: 36px;
  margin-left: 8px;
  color: #294ba4;
  ${mediaQuery('tab')} {
    font-size: 32px;
    margin: 4px 0 4px 4px;
  }
`
const Description = styled('p')`
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
