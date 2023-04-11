import { Footer, Header } from '@/components'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Complete: NextPage = () => {
  const router = useRouter()
  const { event_id: id } = router.query
  const detailLink = `${process.env.NEXT_PUBLIC_APP_URL}/events/details/${id}`
  console.log(id, 'id')

  return (
    <>
      <Header />
      <Link href={`/events/details/${id}`}>{detailLink}</Link>
      <Footer />
    </>
  )
}
export default Complete
