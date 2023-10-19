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
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>
  }
  return (
    <>{articleList?.map((article) => <ArticleListCell key={article.id} article={article} />)}</>
  )
}
