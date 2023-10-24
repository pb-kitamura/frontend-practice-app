import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/layout'
import { ArticleIndexLink } from '@/components/ArticleIndexLink'
import { ArticleDetail } from '@/components/ArticleDetail'
import { DeleteButton } from '@/components/btn/deleteButton'
import { EditButton } from '@/components/btn/editButton'

export default function Home() {
  const router = useRouter()
  const postID: string = typeof router.query.postid === 'string' ? router.query.postid : ''
  return (
    <>
      <ArticleIndexLink />
      <ArticleDetail postID={postID} />
      <Flex justifyContent='end'>
        <DeleteButton postID={postID} />
        <EditButton postID={postID} />
      </Flex>
    </>
  )
}
