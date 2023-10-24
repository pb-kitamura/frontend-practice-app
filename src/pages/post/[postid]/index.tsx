import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/hooks'
import { ArticleIndexLink } from '@/components/ArticleIndexLink'
import { ArticleDetail } from '@/components/ArticleDetail'
import { DeleteButton } from '@/components/btn/deleteButton'
import { EditButton } from '@/components/btn/editButton'
import { ModalWindow } from '@/components/ModalWindow'

export default function Home() {
  const router = useRouter()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const postID: string = typeof router.query.postid === 'string' ? router.query.postid : ''
  return (
    <>
      <ArticleIndexLink />
      <ArticleDetail postID={postID} />
      <Flex justifyContent='end'>
        <DeleteButton postID={postID} onOpen={onOpen} />
        <EditButton postID={postID} />
        <ModalWindow isOpen={isOpen} onClose={onClose} postID={postID} />
      </Flex>
    </>
  )
}
