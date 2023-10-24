import { Button } from '@chakra-ui/react'
type DeleteButtonProps = {
  postID: string
  onOpen: () => void
}
export function DeleteButton({ postID, onOpen }: DeleteButtonProps) {
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
    </>
  )
}
