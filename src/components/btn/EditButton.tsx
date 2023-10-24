import { Button } from '@chakra-ui/react'
import Link from 'next/link'
export function EditButton({ postID }: { postID: string }) {
  return (
    <Button
      mx='5'
      my='5'
      border='2px'
      borderColor='cyan.700'
      borderRadius='50%'
      colorScheme='linkedin'
      size='lg'
    >
      <Link href={'/post/' + postID + '/edit'}>記事編集</Link>
    </Button>
  )
}
