import { Button } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import { ModalWindow } from '../ModalWindow'
export function DeleteButton({ postID }: { postID: string }) {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
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
      <ModalWindow isOpen={isOpen} onClose={onClose} postID={postID} />
    </>
  )
}
