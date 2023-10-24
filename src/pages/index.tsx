import { ArticleList } from '@/components/ArticleList'
import { CreateButton } from '@/components/btn/createButton'
export default function Home() {
  return (
    <main>
      <ArticleList />
      <CreateButton />
    </main>
  )
}
