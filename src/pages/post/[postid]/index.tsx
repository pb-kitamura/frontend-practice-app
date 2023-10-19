import { zip } from 'lodash'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  return <h1>{router.query.postid}</h1>
}
