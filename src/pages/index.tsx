import { Footer, Header } from '@/components'
import { mediaQuery, useBoolean } from '@/hooks'
import styled from '@emotion/styled'
import { NextPage } from 'next'

const Home: NextPage = () => {
  const { isResponsive } = useBoolean()

  return (
    <>
      <Header />
      <MainContainer>
        {isResponsive ? (
          <Image src="/description_sp.png" alt="description" />
        ) : (
          <Image src="/description_pc.png" alt="description" />
        )}
        <Image src="/adsense_gray.png" alt="google adsense" />
      </MainContainer>
      <Footer />
    </>
  )
}

const MainContainer = styled.main`
  height: auto;
  margin: 0 auto;
  max-width: 1000px;
`

const Image = styled.img`
  margin: 36px auto;
  ${mediaQuery('sp')} {
    margin: 16px auto;
  }
`

export default Home
