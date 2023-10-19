import axios from 'axios'
import { ArticleTotalInfo } from '@/types/types'
const endPointURL = 'http://localhost:18080/v1/note'

export const articleApi = {
  async getAll() {
    const { data } = await axios.get<ArticleTotalInfo>(endPointURL)
    return data.items
  },
  // async post()
  // async delete()
  // async patch()
}
