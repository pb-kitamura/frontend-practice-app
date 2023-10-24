import axios from 'axios'
import { ArticleTotalInfo } from '@/types/types'
import { ArticleInfo } from '@/types/types'
const endPointURL = 'http://localhost:18080/v1/note'

export const articleApi = {
  async getAll() {
    const { data } = await axios.get<ArticleTotalInfo>(endPointURL)
    return data.items
  },
  async getDetail(postid: string) {
    const { data } = await axios.get<ArticleInfo>(endPointURL + '/' + postid)
    return data
  },
  async delete(postid: string) {
    const { data } = await axios.delete<ArticleInfo>(endPointURL + '/' + postid)
    return data
  },
  // async post()
  // async patch()
}
