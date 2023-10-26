import * as z from 'zod'
export const FormSchema = z.object({
  title: z
    .string()
    .min(1, { message: '1文字以上入力してください' })
    .max(120, { message: '120文字以内で入力してください' }),
  content: z
    .string()
    .min(1, { message: '1文字以上入力してください' })
    .max(100000, { message: '100000文字以上入力してください' }),
})

export type ArticleRequest = z.infer<typeof FormSchema>
