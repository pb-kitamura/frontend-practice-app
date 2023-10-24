import { Flex, Stack, Box, Text } from '@chakra-ui/layout'
import { useQuery } from '@tanstack/react-query'
import { articleApi } from '@/apis/articleFetch'

export function ArticleDetail({ postID }: { postID: string }) {
  const {
    isLoading,
    isError,
    error,
    data: articleDetail,
  } = useQuery({
    queryKey: ['articleDetail'],
    queryFn: () => articleApi.getDetail(postID),
  })
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error.message}</p>
  }
  return (
    <Stack spacing='5'>
      <Box mx='auto' w='80%' fontSize='3xl'>
        <Text textShadow='1px 1px gray'>{articleDetail?.title}</Text>
      </Box>
      <Flex w='95%' justifyContent='end'>
        <p>作成日: {convertDateTimeFormat(articleDetail?.createdAt)}</p>
      </Flex>
      <Flex w='95%' justifyContent='end'>
        <p>更新日: {convertDateTimeFormat(articleDetail?.updatedAt)}</p>
      </Flex>
      <Box mx='auto' outline='2px solid #faebD7' w='80%' bgColor='gray.100' rounded='md' p='5'>
        <p>{articleDetail?.content}</p>
      </Box>
    </Stack>
  )
}

function convertDateTimeFormat(dateTimeString: string | undefined): string {
  // 入力文字列をDateオブジェクトに変換
  if (dateTimeString === undefined) {
    return '9999/99/99 99:99:99'
  }
  const date = new Date(dateTimeString)

  // 年、月、日を取得
  const year = date.getUTCFullYear()
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0') // 月は0から始まるため+1する
  const day = date.getUTCDate().toString().padStart(2, '0')

  // 時、分、秒を取得
  const hours = date.getUTCHours().toString().padStart(2, '0')
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')
  const seconds = date.getUTCSeconds().toString().padStart(2, '0')

  // 年月日と時分秒を指定のフォーマットに結合
  const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`

  return formattedDateTime
}
