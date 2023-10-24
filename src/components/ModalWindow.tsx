import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/modal'
import { Button, VStack, Box, CloseButton } from '@chakra-ui/react'
import { articleApi } from '@/apis/articleFetch'
import { useMutation } from '@tanstack/react-query'
import Router from 'next/router'

type ModalWindowProps = {
  isOpen: boolean
  onClose(): void
  postID: string
}

export function ModalWindow({ isOpen, onClose, postID }: ModalWindowProps) {
  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: () => articleApi.delete(postID),
    onSuccess: () => {
      Router.push('/')
    },
  })
  return (
    //Modalの閉じるボタン以外でModalを閉じたくなかったのでonCloseを消したが、型エラーになるので空の関数を定義
    <Modal isOpen={isOpen} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <CloseButton ml='auto' mr='0' onClick={onClose} />
        <VStack>
          <Box my='16' fontSize='2xl'>
            本当に削除してよろしいですか？
          </Box>
          {isPending && <p>Loading...</p>}
          {isError && <p>Error: {error.message} 削除失敗!</p>}
          <Button
            mx='5'
            my='5'
            border='2px'
            borderColor='black'
            borderRadius='10%'
            colorScheme='gray'
            size='lg'
            onClick={() => mutate()}
          >
            削除
          </Button>
        </VStack>
      </ModalContent>
    </Modal>
  )
}
