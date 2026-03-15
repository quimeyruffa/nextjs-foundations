import 'server-only'

// Tipo interno completo — nunca sale de este archivo
type UserRecord = {
  id: string
  email: string
  passwordHash: string
  stripeCustomerId: string
  role: string
  name: string
  avatarUrl: string
}

// DTO — solo los campos seguros para el cliente
export type UserDTO = {
  id: string
  name: string
  avatarUrl: string
}

// Base de datos mockeada
const MOCK_USERS: UserRecord[] = [
  {
    id: '1',
    email: 'ana@example.com',
    passwordHash: '$2b$10$supersecrethashedpassword',
    stripeCustomerId: 'cus_abc123secret',
    role: 'admin',
    name: 'Ana García',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=victoria',
  },
  {
    id: '2',
    email: 'carlos@example.com',
    passwordHash: '$2b$10$anothersecrethashedpassword',
    stripeCustomerId: 'cus_xyz789secret',
    role: 'user',
    name: 'Carlos López',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carlos',
  },
]

function toUserDTO(user: UserRecord): UserDTO {
  return {
    id: user.id,
    name: user.name,
    avatarUrl: user.avatarUrl,
    // passwordHash, stripeCustomerId, email, role → omitidos intencionalmente
  }
}

export async function getCurrentUser(): Promise<UserDTO | null> {
  await new Promise((r) => setTimeout(r, 100)) // simula latencia de DB
  const user = MOCK_USERS[0]
  return user ? toUserDTO(user) : null
}