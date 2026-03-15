// apps/web/src/components/profile-card.tsx
'use client'

import type { UserDTO } from '@/lib/server/dal' // ✅ type-only import, no bundlea código

type Props = { user: UserDTO }

export function ProfileCard({ user }: Props) {
  // Solo tiene acceso a id, name, avatarUrl
  // passwordHash y stripeCustomerId no existen aquí
  return (
    <div className="rounded border p-4">
      <img src={user.avatarUrl} alt={user.name} className="h-16 w-16 rounded-full" />
      <h2 className="mt-2 font-bold">{user.name}</h2>
      <p className="text-sm text-gray-500">ID: {user.id}</p>
    </div>
  )
}