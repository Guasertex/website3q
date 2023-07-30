import { serverSupabaseUser } from '#supabase/server'
const myEmail = 'fotamic323@quipas.com'
const data = [
  { id: 0, email: "fotamic323@quipas.com", content: 'My note 1' },
  { id: 1, email: "fotamic323@quipas.com", content: 'Secret stuff' },
  { id: 2, email: "fotamic323@quipas.com", content: 'Do not share with not matt' },
  { id: 3, email: "fotamic323@quipas.com", content: 'Account #2' },
  { id: 4, email: "fotamic323@quipas.com", content: 'mores tuff' },
]

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  return data.filter((note) => note.email === user.email)
})