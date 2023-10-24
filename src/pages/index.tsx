import { ArticleList } from '@/components/ArticleList'
import { CreateButton } from '@/components/btn/CreateButton'
export default function Home() {
  return (
    <main>
      <ArticleList />
      <CreateButton />
    </main>
  )
}
