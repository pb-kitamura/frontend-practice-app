import { ArticleInfo } from '@/types/types'
import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export function ArticleListCell({ article }: { article: ArticleInfo }) {
  return (
    <Flex
      w='80%'
      bgColor='orange.200'
      p='5'
      rounded='md'
      mx=' auto '
      boxShadow='xl'
      _hover={{ bgColor: 'orange.400', fontWeight: '600' }}
      my='7'
      outline='4px solid orange'
      justifyContent='space-between'
      alignItems='flex-end'
    >
      <Text fontSize='xl'>
        <Link href={'/post/' + article.id}>{article.title}</Link>
      </Text>
      <Text>{convertDateFormat(article.updatedAt)}</Text>
    </Flex>
  )
}

function convertDateFormat(dateString: string | undefined): string {
  // 入力文字列をDateオブジェクトに変換
  if (dateString === undefined) {
    return '9999/99/99'
  }
  const date = new Date(dateString)

  // 年、月、日を取得
  const year = date.getUTCFullYear()
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0') // 月は0から始まるため+1する
  const day = date.getUTCDate().toString().padStart(2, '0')

  // 年月日を指定のフォーマットに結合
  const formattedDate = `${year}/${month}/${day}`

  return formattedDate
}
