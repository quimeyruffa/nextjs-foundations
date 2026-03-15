// apps/web/src/app/profile/page.tsx  ← Server Component
import { getCurrentUser } from '@/lib/server/dal'
import { ProfileCard } from '@/components/profile-card'

export default async function ProfilePage() {
  const user = await getCurrentUser() // ✅ DAL solo se llama aquí, en el servidor

  if (!user) return <p>No hay usuario</p>

  return <ProfileCard user={user} /> // solo el DTO cruza la frontera
}