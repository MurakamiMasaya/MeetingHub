import { Footer, Header } from '@/components'
import { GetServerSideProps, NextPage } from 'next'

type Props = {
  id: string
}

const EventDetail: NextPage<Props> = ({ id }) => {
  return (
    <div>
      <Header />
      <h1>Event {id}</h1>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params
}) => {
  const { id } = params!

  return {
    props: {
      id: id as string
    }
  }
}

export default EventDetail
