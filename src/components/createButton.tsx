import Link from 'next/link'
import { Button, Flex } from '@chakra-ui/react'

export function CreateButton() {
  return (
    <Flex justifyContent='end'>
      <Button
        mx='5'
        my='5'
        border='2px'
        borderColor='cyan.700'
        borderRadius='50%'
        colorScheme='linkedin'
        size='lg'
      >
        <Link href='/post/create'>新規投稿</Link>
      </Button>
    </Flex>
  )
}
