import { useRouter } from 'next/router'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { Flex } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/hooks'
import { ArticleIndexLink } from '@/components/ArticleIndexLink'
import { ArticleDetail } from '@/components/ArticleDetail'
import { ModalWindow } from '@/components/ModalWindow'

export default function Home() {
  const router = useRouter()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const postID: string = router.query.postid as string
  if (postID === undefined) {
    return null
  }
  return (
    <>
      <ArticleIndexLink />
      <ArticleDetail postID={postID} />
      <Flex justifyContent='end'>
        <Button
          mx='5'
          my='5'
          border='2px'
          borderColor='orange'
          borderRadius='50%'
          colorScheme='red'
          size='lg'
          onClick={onOpen}
        >
          記事削除
        </Button>
        <Button
          mx='5'
          my='5'
          border='2px'
          borderColor='cyan.700'
          borderRadius='50%'
          colorScheme='linkedin'
          size='lg'
        >
          <Link href={`/post/${postID}/edit`}>記事編集</Link>
        </Button>
        <ModalWindow isOpen={isOpen} onClose={onClose} postID={postID} />
      </Flex>
    </>
  )
}
