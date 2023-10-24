import { useQuery } from '@tanstack/react-query'
import { articleApi } from '@/apis/articleFetch'
import { ArticleListCell } from './ArticleListCell'
export function ArticleList() {
  const {
    isLoading,
    isError,
    error,
    data: articleList,
  } = useQuery({ queryKey: ['articleList'], queryFn: articleApi.getAll })
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error.message}</p>
  }
  return (
    <>{articleList?.map((article) => <ArticleListCell key={article.id} article={article} />)}</>
  )
}
