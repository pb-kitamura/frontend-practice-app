export type ArticleTotalInfo = {
  items?: ArticleInfo[]
  total?: number
}

export type ArticleInfo = {
  id?: string
  title?: string
  content?: string
  createdAt?: string
  updatedAt?: string
}
