import AutosizeTextarea from 'react-textarea-autosize'
import {
  Button,
  VStack,
  Textarea,
  Input,
  FormControl,
  FormLabel,
  Box,
  Text,
} from '@chakra-ui/react'
import { articleApi } from '@/apis/articleFetch'
import { useMutation } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { ArticleRequest, FormSchema } from '@/types/validation'
import { zodResolver } from '@hookform/resolvers/zod'

export default function Edit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleRequest>({
    reValidateMode: 'onSubmit',
    resolver: zodResolver(FormSchema),
  })
  const router = useRouter()
  const postID: string = router.query.postid as string
  const { data: articleDetail } = useQuery({
    queryKey: ['articleDetail'],
    queryFn: () => articleApi.getDetail(postID),
    enabled: postID !== undefined,
  })
  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: (request: ArticleRequest) => articleApi.put(postID, request),
    onSuccess: () => {
      router.push(`/post/${postID}`)
    },
  })
  if (postID === undefined) {
    return null
  }
  return (
    <FormControl mt='16'>
      <VStack gap='6'>
        {isPending && <p>Loading...</p>}
        {isError && <p>Error: {error.message} 編集失敗!</p>}
        <Box w='80%'>
          <FormLabel htmlFor='title'>タイトル</FormLabel>
          <Input defaultValue={articleDetail?.title} id='title' {...register('title')} />
          <Text color='red'>{errors.title?.message}</Text>
        </Box>
        <Box w='80%'>
          <FormLabel htmlFor='content'>投稿本文</FormLabel>
          <Textarea
            defaultValue={articleDetail?.content}
            as={AutosizeTextarea}
            id='content'
            {...register('content')}
          />
          <Text color='red'>{errors.content?.message}</Text>
        </Box>
        <Button
          mx='5'
          my='5'
          border='2px'
          borderColor='cyan.700'
          borderRadius='10%'
          colorScheme='linkedin'
          size='lg'
          onClick={handleSubmit((request) => mutate(request))}
        >
          記事編集
        </Button>
      </VStack>
    </FormControl>
  )
}
