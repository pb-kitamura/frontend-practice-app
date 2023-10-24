import Link from 'next/link'
import { Box } from '@chakra-ui/layout'
export function ArticleIndexLink() {
  return (
    <Box my='4' mx='auto' w='95%' _hover={{ fontWeight: '600' }}>
      <Link href='/'>←記事一覧へ</Link>
    </Box>
  )
}
