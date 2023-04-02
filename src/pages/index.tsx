import { Footer, Header } from '@/components'
import { useBoolean } from '@/hooks'
import styled from '@emotion/styled'
import { NextPage } from 'next'

const Home: NextPage = () => {
  const { isResponsive } = useBoolean()

  return (
    <>
      <Header />
      <MainContainer>
        {isResponsive ? (
          <DescriptionImage src="/description_sp.png" alt="description" />
        ) : (
          <DescriptionImage src="/description_pc.png" alt="description" />
        )}
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

const DescriptionImage = styled.img`
  margin: 24px auto;
`

export default Home
