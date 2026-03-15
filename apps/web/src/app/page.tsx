import ProfilePage from '@/components/ProfilePage'
export default function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="font-bold text-4xl">Web</h1>
      <ProfilePage />
      <p>TODO: Content</p>
    </main>
  );
}
